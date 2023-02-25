<h1 align="center">React Native Table Builder</h1>

Inspired by the awesome https://github.com/Gil2015/react-native-table-component/ library.

Made for a friend who wanted a few more features added to it but also have a single import.

Then it hit me may be there is someone out there who has the same taste as him.

This is a table component for react native.

- [Installation](#installation)
- [Examples](#examples)
- [Properties](#properties)
- [License](#license)


## Installation
> npm install react-native-table-gen

## Usage

```jsx
import React, { Component } from 'react';
import { TableBuilder } from 'react-native-table-gen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
    {
      label: 'TransactionID',
      fieldName: 'repaymentId',
      sortable: false
    },
    {
      label: 'Paid On',
      fieldName: 'repaymentDate',
      sortable: true,
      flexWidth: 100,
      dataType: 'date'
    },
    {
      label: 'Amount',
      fieldName: 'amount',
      dataType: 'currency',
      sortable: true
    }
  ],
      data: 
    {
      repaymentId: 'eaf472f3-4705-49be-a16a-b5518f6016e2',
      repaymentDate: '2020-02-29',
      amount: 5113
    },
    {
      repaymentId: '13f409ed-faab-42c9-8134-0f7bade42f07',
      repaymentDate: '2020-02-16',
      amount: 5710
    },
    {
      repaymentId: 'cb249d29-13dc-4e26-818b-126b6de47994',
      repaymentDate: '2019-09-09',
      amount: 9897
    }
  ]
    }
  }

  render() {
    const {headers, data } = this.state;
    return (
      <View>
     <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="repaymentDate"
      defaultSortOrderBy="desc"
    />
      </View>
    )
  }
}
```

## Table Props

| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>headers</b>      | Array | headers of the table | |
| <b>data</b>  | Array | data that will be displayed in the table   | |
| <b>defaultSortByField</b>   | string | by which field will data be sorted by default. Column must be sortable in header definition or no data will be displayed. | |
| <b>defaultSortOrderBy</b>   | string | what is the default ordering? asc or desc | asc |
| <b>tableWrapperStyle</b>  | object | styles for the table | undefined |
| <b>alternateRowBackgroundColor</b>   | string | hexa color value for alternating row colors. | #fbeee4 |
| <b>tableRowHeight</b>  | number | height of rows of the table | 50 |
| <b>headerStyle</b>   | object   | style of the table header |  undefined    |
| <b>tableCellStyle</b>   | object   | styles of a cell       |  undefined    |
| <b>includeCountingColumn</b>   | boolean   | including a row counting column on the table  |  false    |
| <b>navigation</b>   | object   | if clicking any data will open a new screen, pass navigation objet   |  undefined  |
---

<br/><br/>

## Headers

Table headers is an array, with each array being a definition of the header.

| Prop              | Type  | Description | Default |
|---|---|---|---|
| <b>label</b>      | string | header text| |
| <b>fieldName</b>  | string | key name from the data object that will be displayed under the header   | |
| <b>sortable</b>   | bolean | can the column be sorted | false |
| <b>dataType</b>   | string | what is the data type that goes into the column? | string |
| <b>flexWidth</b>  | number | width of the column. Can be % or numerical value | undefined |
| <b>currencySymbol</b>   | string | for currency data types, what currency symbol can be displayed | undefined |
| <b>curencySymbolPosition</b>  | string | for currency data types, where should the currency symbol be displayed | front |
| <b>decimalsToShow</b>   | number   | for currency and number data types, how many decimals to show?       |  undefined    |
| <b>styles</b>   | object   | Style definition for elements  |  undefined    |
| <b>incomingDateSeparator</b>   | string   | for date data types, how are the dates in the data separated?   |  undefined / -    |
| <b>returnDate</b>   | boolean   | for date data types, should date be displayed in the table?  |  true    |
| <b>returnTime</b>   | boolean   | for date data types, should time be displayed in the table?   |  false    |
| <b>dateOutputFormat</b>   | string   | for date data types with returnDate true, how should the date be formatted?   |  yyyy-mm-dd    |
| <b>outputDateSeparator</b>   | string   | for date data types with returnDate true, how should the date parts be separated?   |  -    |
| <b>outputTimeFormat</b>   | string   | for date data types with returnTime true, how should the time be formatted?  |  hh:mm    |
| <b>link</b>   | object   | if clicking rows under the columns will open a new screen, define the props  |  undefined   |
---


<br/><br/>

## Data Types

Columns can be string, number, currency, email or date


## Examples

You can combine any of the definitions below to create the table that you want. If your data is big, you should consider putting the table in a scrollview.

# Simple 
```jsx
  const headers = [
    {
      label: 'Employee Name',
      fieldName: 'name',
      sortable: false
    },
    {
      label: 'Paid On',
      fieldName: 'repaymentDate',
      sortable: true,
      dataType: 'date',
      returnDate : true,
      returnTime : false
    },
    {
      label: 'Rank',
      fieldName: 'rank',
      dataType: 'number',
      sortable: true
    },
    {
      label: 'Amount',
      fieldName: 'amount',
      dataType: 'currency',
      sortable: true,
      currencySymbol : "$",
      curencySymbolPosition: 'back'
    },
  ];

  const data = [
    {"name":"Deonne","repaymentDate":"2020-06-18","rank":14,"amount":1331.23},
    {"name":"Cara","repaymentDate":"2020-06-11","rank":2,"amount":1921.38},
    {"name":"Robinet","repaymentDate":"2020-07-22","rank":7,"amount":2081.12},
    {"name":"Mercie","repaymentDate":"2020-05-15","rank":4,"amount":1378.6},
    {"name":"Aida","repaymentDate":"2020-07-31","rank":1,"amount":1027.17},
    {"name":"Tanhya","repaymentDate":"2020-07-06","rank":11,"amount":1849.45},
    {"name":"Calida","repaymentDate":"2020-05-16","rank":5,"amount":1147.65},
    {"name":"Sherwynd","repaymentDate":"2020-07-06","rank":3,"amount":2063.8},
    {"name":"Eirena","repaymentDate":"2020-08-02","rank":8,"amount":1006.67},
    {"name":"Julio","repaymentDate":"2020-06-18","rank":10,"amount":1986.76},
    {"name":"Reagan","repaymentDate":"2020-06-06","rank":15,"amount":2249.13},
    {"name":"Beth","repaymentDate":"2020-05-19","rank":12,"amount":1455.47},
    {"name":"Casar","repaymentDate":"2020-05-13","rank":6,"amount":2011.91},
    {"name":"Ollie","repaymentDate":"2020-06-26","rank":13,"amount":2016.66},
    {"name":"Daisi","repaymentDate":"2020-05-06","rank":9,"amount":2191.48}
    ]


     <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="repaymentDate"
      defaultSortOrderBy="desc"
      />
```
![Simple Table](screenshots/simple_table.png?raw=true "Simple Table")

<br/><br/>

# Table With Row Column
```jsx
     <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="repaymentDate"
      defaultSortOrderBy="desc"
      includeCountingColumn={true}
      />

```

![Simple Table With Row Number Column](screenshots/simple_table_row_column.png?raw=true "Simple Table With Row Number Column")

<br/><br/>

## Table With Style Definitions

Styles the overall table.
```jsx
       const tableWrapperStyle = {
       padding: 50
       }
     <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="repaymentDate"
      defaultSortOrderBy="desc"
      includeCountingColumn={true}
      tableWrapperStyle={tableWrapperStyle}
      />

```
![Styled Table](screenshots/styled_table.png?raw=true "Styled Table")

<br/><br/>

# Table With Currency Column

Currency column can have the following options:

currencySymbol: needed.
decimalOptions: how many decimal points to show? Default 2.
currencySymbolPosition: can be front or back. Default front
styles : styling the control. Optional. Provide object style e.g.

const styles = {
  color:'#00f'
}

```jsx
  const headers = [
       {
      label: 'Amount',
      fieldName: 'amount',
      dataType: 'currency',
      sortable: true,
      currencySymbol : "$",
      curencySymbolPosition: 'front',
      decimalsToShow: 1,
      styles : {
        color : '#00f',
        fontWeight: 'bold' 
      }
    }
  ];
  ```
![Currency Column](screenshots/currency.png?raw=true "Currency Column")

<br/><br/>

# Table With Date Column

Dates are in yyyy-mm-dd hh:mm:ss format.


```jsx

    const headers = [
      {
        label: 'Employee Name',
        fieldName: 'name',
        sortable: false
      },
      {
        label: 'Hired On',
        fieldName: 'hiredOn',
        sortable: true,
        dataType: 'date',
        returnDate : true,
        returnTime : false,
        styles : {
          color : '#f00'
        },
        dateOutputFormat: 'dd-mm-yyyy',
        outputDateSeparator: '/'
      },
      {
        label: 'Punch In Time',
        fieldName: 'punchInTime',
        sortable: true,
        dataType: 'date',
        returnDate : true,
        returnTime : true,
        styles : {
          color : '#00f',
          fontSize: 11
        },
        dateOutputFormat: 'dd-mm-yyyy',
        outputDateSeparator: '/',
        outputTimeFormat:'hh:mm'
      },
      {
        label: 'Punch Out Time',
        fieldName: 'punchOutTime',
        sortable: true,
        dataType: 'date',
        returnDate : true,
        returnTime : true,
        styles : {
          color : '#00f'
        },
        dateOutputFormat: 'yyyy-mm-dd',
        outputTimeFormat:'hh:mm:ss'
      },
      {
        label: 'Worked Hours',
        fieldName: 'workedHours',
        sortable: true,
        dataType: 'date',
        returnDate : false,
        returnTime : true,
        styles : {
          color : '#000',
          fontSize: 14,
          backgroundColor:'#f00'
        },
        outputTimeFormat:'hh:mm'
      }
    ];

const data = [{"name":"Othilia","hiredOn":"2020-05-10","punchInTime":"2020-05-11 18:40:22","punchOutTime":"2020-07-28 14:44:37","workedHours":"2020-05-09 09:03:49"},
{"name":"Neel","hiredOn":"2020-07-16","punchInTime":"2020-05-31 20:58:59","punchOutTime":"2020-06-29 00:58:07","workedHours":"2020-08-05 14:26:14"},
{"name":"Vail","hiredOn":"2020-07-26","punchInTime":"2020-05-28 23:17:30","punchOutTime":"2020-05-01 16:50:12","workedHours":"2020-05-14 17:40:18"},
{"name":"Kira","hiredOn":"2020-06-06","punchInTime":"2020-07-15 01:23:29","punchOutTime":"2020-06-27 00:21:19","workedHours":"2020-07-13 23:57:29"},
{"name":"Travis","hiredOn":"2020-06-10","punchInTime":"2020-08-03 13:09:12","punchOutTime":"2020-05-05 12:28:24","workedHours":"2020-05-05 00:14:14"},
{"name":"Esme","hiredOn":"2020-07-12","punchInTime":"2020-06-26 09:10:02","punchOutTime":"2020-07-29 10:55:22","workedHours":"2020-05-01 18:39:16"},
{"name":"Kikelia","hiredOn":"2020-05-06","punchInTime":"2020-08-03 00:29:48","punchOutTime":"2020-05-14 11:38:04","workedHours":"2020-06-17 13:51:31"},
{"name":"Tull","hiredOn":"2020-06-24","punchInTime":"2020-06-06 11:07:10","punchOutTime":"2020-06-06 11:24:54","workedHours":"2020-06-14 13:44:57"},
{"name":"Carine","hiredOn":"2020-05-01","punchInTime":"2020-07-12 23:28:44","punchOutTime":"2020-07-18 23:29:18","workedHours":"2020-07-24 02:15:32"},
{"name":"Pavia","hiredOn":"2020-05-24","punchInTime":"2020-07-18 19:24:22","punchOutTime":"2020-05-13 05:57:54","workedHours":"2020-07-27 07:01:46"},
{"name":"Anastasie","hiredOn":"2020-08-02","punchInTime":"2020-06-26 03:59:31","punchOutTime":"2020-05-05 20:13:40","workedHours":"2020-08-01 21:09:48"},
{"name":"Farica","hiredOn":"2020-06-20","punchInTime":"2020-06-03 11:48:30","punchOutTime":"2020-07-27 15:59:21","workedHours":"2020-07-20 05:27:09"},
{"name":"Vilhelmina","hiredOn":"2020-05-18","punchInTime":"2020-05-27 15:16:48","punchOutTime":"2020-05-20 19:46:20","workedHours":"2020-07-07 12:10:02"},
{"name":"Everard","hiredOn":"2020-05-21","punchInTime":"2020-06-27 16:38:17","punchOutTime":"2020-06-13 23:20:01","workedHours":"2020-07-16 13:15:47"},
{"name":"Heather","hiredOn":"2020-07-20","punchInTime":"2020-07-27 05:58:25","punchOutTime":"2020-05-13 00:22:54","workedHours":"2020-06-27 10:59:41"}];

  <TableBuilder
      headers={headers1
      data={data}
      defaultSortByField="hiredOn"
      defaultSortOrderBy="desc"
      />

```

![Date Column](screenshots/date.png?raw=true "Date Column")

<br/><br/>

# Table With Email Column

Email columns opens up the devices email application on click of the email.
```jsx
  const headers = [
    {
      label: 'Employee Name',
      fieldName: 'name',
      sortable: true,
      link:{
        routeName : 'repaymentInfo',
        routeParameters: {
          "name" : undefined,
          "source": "App"
        }
      }
    },
    {
      label: 'Email',
      fieldName: 'email',
      dataType: 'email',
      sortable: true,
      styles: {
        color: '#f00'
      }
    }
  ];

  const data = [{"name":"Lea","email":"lfrow0@msu.edu"},
{"name":"Ab","email":"aciementini1@wunderground.com"},
{"name":"Allayne","email":"amateiko2@github.io"},
{"name":"Eddy","email":"ehanner3@spotify.com"},
{"name":"Dorian","email":"dspong4@vkontakte.ru"},
{"name":"Demeter","email":"dsedman5@hexun.com"},
{"name":"Raf","email":"rbroxholme6@ehow.com"},
{"name":"Zechariah","email":"ztinklin7@blogger.com"},
{"name":"Nolan","email":"nphillipson8@trellian.com"},
{"name":"Tarrah","email":"tkidder9@answers.com"},
{"name":"Janaye","email":"jspaicea@usda.gov"},
{"name":"Ethe","email":"eskullyb@amazon.co.uk"},
{"name":"Arnie","email":"agoodlakec@multiply.com"},
{"name":"Dev","email":"dfoulisd@senate.gov"},
{"name":"Carmelia","email":"cedmette@cnbc.com"}]


      <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="name"
      defaultSortOrderBy="desc"
      />

```

![Email Column](screenshots/email.png?raw=true "Email Column")
<br/><br/>

# Table With Number Column

Default decimals to show is 0.

```jsx

    const headers = [
      {
        label: 'baseNumber',
        fieldName: 'baseNumber',
        sortable: true,
        dataType: 'number',
        styles :{
          color: '#f00'
        }
      },
      {
        label: 'No Decimal',
        fieldName: 'noDecimal',
        sortable: true,
        dataType: 'number',
        decimalsToShow:0,
        styles : {
          color : '#fff',
          backgroundColor:'#00f'
        },
      },
      {
        label: 'One Decimal',
        fieldName: 'oneDecimal',
        sortable: false,
        dataType: 'number',
        decimalsToShow:1,
        styles : {
          fontSize: 13
        },
      },
      {
        label: 'Three Decimal',
        fieldName: 'threeDecimal',
        sortable: false,
        dataType: 'number',
        decimalsToShow:3
      },


    ];

    const data = [{"baseNumber":698.08,"noDecimal":"698","oneDecimal":"698.1","threeDecimal":"698.080"},{"baseNumber":799.6,"noDecimal":"800","oneDecimal":"799.6","threeDecimal":"799.600"},{"baseNumber":668.57,"noDecimal":"669","oneDecimal":"668.6","threeDecimal":"668.570"},{"baseNumber":729.87,"noDecimal":"730","oneDecimal":"729.9","threeDecimal":"729.870"},{"baseNumber":223.64,"noDecimal":"224","oneDecimal":"223.6","threeDecimal":"223.640"},{"baseNumber":108.3,"noDecimal":"108","oneDecimal":"108.3","threeDecimal":"108.300"},{"baseNumber":996.44,"noDecimal":"996","oneDecimal":"996.4","threeDecimal":"996.440"},{"baseNumber":425.07,"noDecimal":"425","oneDecimal":"425.1","threeDecimal":"425.070"},{"baseNumber":728.96,"noDecimal":"729","oneDecimal":"729.0","threeDecimal":"728.960"},{"baseNumber":623.42,"noDecimal":"623","oneDecimal":"623.4","threeDecimal":"623.420"},{"baseNumber":146.42,"noDecimal":"146","oneDecimal":"146.4","threeDecimal":"146.420"},{"baseNumber":737.02,"noDecimal":"737","oneDecimal":"737.0","threeDecimal":"737.020"},{"baseNumber":566.96,"noDecimal":"567","oneDecimal":"567.0","threeDecimal":"566.960"},{"baseNumber":822.27,"noDecimal":"822","oneDecimal":"822.3","threeDecimal":"822.270"},{"baseNumber":134.91,"noDecimal":"135","oneDecimal":"134.9","threeDecimal":"134.910"}]


      <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="baseNumber"
      defaultSortOrderBy="desc"
      />

```

![Number Column](screenshots/number.png?raw=true "Number Column")
<br/><br/>

# Table With Links to Other Screens

To open other screens, you simply provide route information of the screen to be opened in headers
You must providen navigation object (where navigate method is defined) to the TableBuilder component.

For dynamic values that will be filled from the data rows, set the value of the field name to undefined. If the route expects a static value, just set the key and value yourself.

Example Routes


Screen One
    Route name : ScreenOne
    parameters: empty

Screen Two
    Route name : ScreenTwo
    parameters : {
      employeeId
    }

Screen Three
    Route name : ScreenThree
    parameters : {
      employeeId,
      groupId,
      1111
    }


```jsx

const headers = [
  {
    label: 'ScreenOne',
    fielName : 'name',
    link : {
      routeName : 'ScreenOne',
      parameters : {}
    }
  },

  {
    label :'ScreenTwo',
    fieldName : 'employeeId',
    link: {
      routeName : 'screenTwo',
      parameters : {
        employeeId : undefined
      }
    }
  },
  {
    label :'ScreenThree',
    fieldName : 'employeeId',
    link: {
      routeName : 'screenTwo',
      parameters : {
        employeeId : undefined,
        groupId: undefined,
        code: 1111
      }
    }
  },

];

// in the above definintion, employeeId and groupId are fields in each row of the data defined
// below. while code :1111 is static pair that will be passed as it is to the called screen.

const data = [
  {'name':'Jon Doe' , 'employeeId':1,'groupId':3}
]


      <TableBuilder
      headers={headers}
      data={data}
      defaultSortByField="name"
      defaultSortOrderBy="desc"
      navigation={navigation}
      />

```


<br/><br/>




## License

[MIT](LICENSE)
