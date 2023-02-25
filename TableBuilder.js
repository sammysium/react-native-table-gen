/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MyCurrency from './MyCurrency';
import MyDate from './MyDate';
import MyNumber from './MyNumber';
import MyEmail from './MyEmail'
import ServiceSort from './ServiceSort';

const MyComponent = ({
  headers,
  data,
  defaultSortByField,
  defaultSortOrderBy,
  tableWrapperStyle,
  alternateRowBackgroundColor,
  tableRowHeight,
  headerStyle,
  tableCellStyle,
  includeCountingColumn,
  navigation
}) => {
  /*
    Displays tabular data. The default column should be sortable.

    */
  const [tableData, populateTableData] = useState([]);
  const [orderBy, updateOrdering] = useState(defaultSortOrderBy || 'asc');
  const [lastOrderedBy, updateOrderedByField] = useState(defaultSortByField);
  const headersDefinition = {}
  let defaultOrderByColumnIndex = -1;//in headers array, which column is the default one?

  let styles = JSON.parse(JSON.stringify(defaultStyles));
  if (tableRowHeight){
    styles.row.height = tableRowHeight;
  }

  if (headerStyle){
    styles.header = headerStyle
  }

  if (tableCellStyle) {
    styles.cell = tableCellStyle
  }
  if (tableWrapperStyle){
    styles.wrapper = tableWrapperStyle;
  }

  if ( alternateRowBackgroundColor ) {
    styles.alternateRowBackgroundColor.backgroundColor = alternateRowBackgroundColor;
  }

  headers.forEach((header,index) =>{
    headersDefinition[header.fieldName] = header;
    if (header.fieldName === defaultSortByField){
      defaultOrderByColumnIndex = index;
    }
  })

  const openRoute = (routeName, parameters, recordInfo) =>{
    /*
    navigates to routeName by passing parameters

    @input routeName : string. the route to open
    @input paramers: dictionary objec. Every key with undefined value is to be replaced with a value from recordINfo
                      if value is not undefined, it means it is literarl value that shouldn't be replaced

    @input recordInfo: a dictionary object of a record
    */
   if (navigation){
    const params = {};
    Object.keys(parameters).forEach(key=>{
      let value = parameters[key];
      if (value === undefined){
        value = recordInfo[key]
      }
      params[key] = value;
    })
     navigation.navigate(routeName, params);
   }

  }

  const createTabularData = (arData) => {
    const transformmedData = [];
    arData.forEach((dictRecord, index) => {
      const record = [];
      if (includeCountingColumn === true){
        record.push(
          <Text key={`rowCounter${index}`}>{index + 1}</Text>
        )
      }

      Object.keys(headersDefinition).forEach(dbFieldName=>{
        const elementKey = `${dbFieldName}_${index}`
        const value = dictRecord[dbFieldName];
        const recordInfo = headersDefinition[dbFieldName];
        const cellStyle = recordInfo['styles'];
        const dataType = recordInfo['dataType'] || 'string';
        const openLinkParams = recordInfo['link'];
        const onPressProps = {}
        if (openLinkParams){
          onPressProps['onPress'] =()=> openRoute(openLinkParams['routeName'], openLinkParams['routeParameters'], dictRecord);
        }

        if (dataType === 'string') {
          record.push(
            <Text key={elementKey} {...onPressProps} testID={elementKey}>
              {value}
            </Text>
          );
        }else if (dataType === 'email') {
          record.push(
            <MyEmail key={elementKey} styles={cellStyle} email={value}/>
          );
        }else if (dataType === 'currency') {
          const { currencySymbol, curencySymbolPosition, decimalsToShow } = recordInfo;
          record.push(
            <MyCurrency
              key={elementKey}
              amount={value}
              currencySymbol = {currencySymbol}
              curencySymbolPosition = {curencySymbolPosition}
              decimalsToShow = { decimalsToShow }
              styles = { cellStyle }
              {...onPressProps}
              testID={elementKey}
            />
          );
        }else if (dataType === 'number') {
          const { decimalsToShow } = recordInfo;
          record.push(
            <MyNumber
              key={elementKey}
              value={value}
              decimalsToShow = {decimalsToShow}
              styles = { cellStyle }
              {...onPressProps}
              testID={elementKey}
            />
          );
        }else if (dataType === 'date') {
          const { incomingDateSeparator, returnDate, returnTime, dateOutputFormat, outputDateSeparator, outputTimeFormat } = recordInfo;
          record.push(<MyDate
            key={elementKey}
            value={value}
            returnDate = { returnDate }
            returnTime = { returnTime }
            dateFormat = {  dateOutputFormat}
            separateDateWith = { outputDateSeparator}
            timeFormat = { outputTimeFormat}
            incomingDateSeparator= {incomingDateSeparator}
            styles = { cellStyle }
            {...onPressProps}
            testID={elementKey}
            />);
        }

      })

      transformmedData.push(record);
    })
    populateTableData(transformmedData);
  }


  useEffect(() => {
    sortTableData(defaultOrderByColumnIndex);
  }, []);

  const colorRow = (index) => {
    /*
    to alternate row background color
    */
    if (index % 2) {
      return styles.alternateRowBackgroundColor;
    }
    return {};
  };

  const sortTableData = (columnIndex) => {
    /*
    if it is sortable, sort. if not ignore
    */
    if (!headers[columnIndex].sortable) {
      return false;
    }
    const fieldType =
      headers[columnIndex].dataType === 'currency'
        ? 'number'
        : headers[columnIndex].dataType;
    const sortedData = ServiceSort.genericDictArraySort(
      data,
      headers[columnIndex].fieldName,
      fieldType,
      orderBy
    );
    createTabularData(sortedData);
    if (lastOrderedBy === headers[columnIndex].fieldName) {
      // user pressing same column. change order
      if (orderBy === 'asc') {
        updateOrdering('desc');
      } else {
        updateOrdering('asc');
      }
    } else {
      updateOrderedByField(headers[columnIndex].fieldName);
    }
    return true;
  };

  const renderDataRow = (index,records) =>{
    const views = [];
    let rows = [];
    if (includeCountingColumn === true){
      rows = records.slice(1);
      const keyValue = `rowCounter${index}`
      views.push(
        <View key={keyValue} style={{...styles.cell, width:'5%'}}>
        {records[0]}
      </View>
      )
    }else{
      rows = records;
    }

    rows.forEach((row, idx) => {
        const keyValue = `row${index}_${idx}`
        views.push(
          <View key={keyValue} style={{...styles.cell, ...setColWidth(idx)}}>
          {row}
        </View>
        )
   })
    return views;
  }

  const setColWidth = (headerIndex) =>{
    if ( headers[headerIndex]['width']){
      return {width : headers[headerIndex]['width']}
    }
    return {flex:1}
  }

  return (
    <>
    <View style={styles.wrapper}>
    <View style={{...styles.row, ...styles.header}}>
    {includeCountingColumn && <View key="rowCounterColumn" style={{...styles.cell, width:'5%'}}>
            <Text accessibilityHint="rowNumber">#</Text>
          </View>}
        {headers.map((h, key) => (
          <View key={key} style={{...styles.cell, ...setColWidth(key)}}>
          <TouchableOpacity
            accessibilityHint={h.label}
            onPress={() => sortTableData(key)}
          >
            <Text>{h.label}</Text>
          </TouchableOpacity>
          </View>
        ))}
      </View>
      <View accessibilityHint="records">
        {tableData.map((d, index) => (
          <View key={`recordRow_${index}`} style={{...styles.row, ...colorRow(index)}}>
            { renderDataRow(index,d)}
          </View>

        ))}
     </View>
      </View>
    </>
  );
};

const defaultStyles = StyleSheet.create({
  wrapper: {
      padding: 10
  },
  row:{
    flexDirection:"row",
    height:50
  },
  header:{
    backgroundColor:'#00ff00'
  },
  cell:{
    borderWidth:1,
    padding:3
  },
  alternateRowBackgroundColor: {
    backgroundColor: '#fbeee4'
  },
  start: {
    textAlign: 'left'
  }
});

MyComponent.propTypes = {
  headers: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  defaultSortByField: PropTypes.string.isRequired,
  defaultSortOrderBy: PropTypes.string.isRequired,
  tableWrapperStyle : PropTypes.object,
  alternateRowBackgroundColor: PropTypes.string,
  tableRowHeight : PropTypes.number,
  headerStyle : PropTypes.object,
  tableCellStyle: PropTypes.object,
  includeCountingColumn: PropTypes.bool,
  navigation : PropTypes.object
};
MyComponent.defaultProps = {
  tableWrapperStyle : undefined,
  alternateRowBackgroundColor: undefined,
  tableRowHeight : undefined,
  headerStyle : undefined,
  tableCellStyle: undefined,
  includeCountingColumn: false,
  navigation : undefined
}
const TableBuilder = React.memo(MyComponent);
export default TableBuilder;
