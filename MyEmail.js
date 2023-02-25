import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, Linking } from 'react-native';

const MyComponent = ({
  email,
  styles
}) => {
  const txtStyle = styles !== undefined ? styles : defaultStyles.text;

  return (
    <>
      <Text style={txtStyle} onPress={() => Linking.openURL(`mailto:${email}`)}>{email}</Text>
    </>
  );
};

const defaultStyles = StyleSheet.create({
  text: {
    color: '#00f',
    marginBottom: 4,
    marginRight: 10
  }
});
MyComponent.propTypes = {
  email: PropTypes.string.isRequired,
  styles: PropTypes.instanceOf(Object)
};
MyComponent.defaultProps ={
  styles: undefined
};
const MyEmail = React.memo(MyComponent);
export default MyEmail;
