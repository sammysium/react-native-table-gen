import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { formatCurrency }  from './helperFunctions';

const MyComponent = ({
  amount,
  currencySymbol,
  curencySymbolPosition,
  decimalsToShow,
  styles,
  rest
}) => {
  let txtStyle = styles !== undefined ? styles : defaultStyles.text;
  const output = formatCurrency(
    amount,
    currencySymbol,
    curencySymbolPosition,
    decimalsToShow
  );

  return (
    <>
      <Text style={txtStyle} {...rest}>{output}</Text>
    </>
  );
};

const defaultStyles = StyleSheet.create({
  text: {
    color: '#000',
    marginBottom: 4,
    marginRight: 10
  }
});
MyComponent.propTypes = {
  amount: PropTypes.number.isRequired,
  decimalsToShow: PropTypes.number,
  curencySymbolPosition: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  currencySymbol : PropTypes.string.isRequired,
  rest: PropTypes.instanceOf(Object)
};
MyComponent.defaultProps ={
  styles: undefined,
  decimalsToShow: 2,
  curencySymbolPosition: 'front',
  rest : {}
};
const MyCurrency = React.memo(MyComponent);
export default MyCurrency;
