import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { formatNumber }  from './helperFunctions';

const MyComponent = ({
  value,
  decimalsToShow,
  styles,
  rest
}) => {
  const txtStyle = styles !== undefined ? styles : defaultStyles.text;
  const output = formatNumber(
    value,
    decimalsToShow === undefined ? 2 : decimalsToShow
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
  value: PropTypes.number.isRequired,
  decimalsToShow: PropTypes.number,
  styles: PropTypes.instanceOf(Object),
  rest: PropTypes.instanceOf(Object)
};
MyComponent.defaultProps ={
  styles: undefined,
  decimalsToShow: 0,
  rest: {}
};
const MyNumber = React.memo(MyComponent);
export default MyNumber;
