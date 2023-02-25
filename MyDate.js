import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

/*
Display Date/Time/DateTime. All are optional except
value. Note we just want a consistent date displayer
of the incoming date as it is, without any conversion.
value is expected to be UTC in yyyy-mm-ddTHH:MM:SSZ

We can do with parsing the date instead of separating.

*/

// TODO: update in line with what we will expect to come from
// real couchbase/roster

const MyComponent = ({
  value,
  incomingDateSeparator,
  returnDate,
  returnTime,
  dateFormat,
  separateDateWith,
  timeFormat,
  styles,
  rest
}) => {
  const txtStyle = styles !== undefined ? styles : defaultStyles.text;
  const desiredOutputFormat =
    dateFormat !== undefined ? dateFormat : 'yyyy-mm-dd';
  const desiredTimeOutputFormat =
    timeFormat !== undefined ? timeFormat : 'hh:mm';
  const separateDateValuesWith =
    separateDateWith !== undefined ? separateDateWith : '-';
  const incomingValueSeparator =
    incomingDateSeparator !== undefined ? incomingDateSeparator : '-';
  // returnees
  let date = '';
  let time = '';
  let displayedOutput = '';
  try {
    const parsedValue = value.split(' ');
    if (returnDate) {
      const datePart = parsedValue[0].split(incomingValueSeparator);
      const year = datePart[0];
      const month = datePart[1];
      const day = datePart[2];
      switch (desiredOutputFormat.toLowerCase()) {
        case 'dd-mm-yyyy':
          date =
            day +
            separateDateValuesWith +
            month +
            separateDateValuesWith +
            year;
          break;
        case 'mm-dd-yyyy':
          date =
            month +
            separateDateValuesWith +
            day +
            separateDateValuesWith +
            year;
          break;
        default:
          date =
            year +
            separateDateValuesWith +
            month +
            separateDateValuesWith +
            day;
          break;
      }
      displayedOutput = date;
    }

    if (returnTime) {
      const timePart = parsedValue[1].split(':');
      const hr = timePart[0];
      const mm = timePart[1];
      let ss = timePart[2]; // includes milisecond
      const sec = ss.split('.');
      // eslint-disable-next-line prefer-destructuring
      ss = sec[0];
      if (desiredTimeOutputFormat === 'hh:mm:ss') {
        time = `${hr}:${mm}:${ss}`;
      } else {
        time = `${hr}:${mm}`;
      }
    }

    if (returnDate && returnTime) {
      displayedOutput = `${date} ${time}`;
    } else if (returnDate && !returnTime) {
      displayedOutput = date;
    } else {
      displayedOutput = time;
    }
  } catch (error) {
    displayedOutput = value;
  }
  displayedOutput = displayedOutput.trim();

  return (
    <>
      <Text style={txtStyle} {...rest}>{displayedOutput}</Text>
    </>
  );
};

const defaultStyles = StyleSheet.create({
  text: {
    color: '#000',
    marginBottom: 4,
    marginRight: 20
  }
});

MyComponent.propTypes = {
  value: PropTypes.string.isRequired,
  incomingDateSeparator: PropTypes.string,
  timeFormat: PropTypes.string,
  styles: PropTypes.instanceOf(Object),
  returnDate: PropTypes.bool,
  returnTime: PropTypes.bool,
  dateFormat: PropTypes.string,
  separateDateWith: PropTypes.string,
  rest : PropTypes.instanceOf(Object)
};
MyComponent.defaultProps = {
  styles: undefined,
  timeFormat: undefined,
  returnDate: true,
  returnTime: false,
  incomingDateSeparator: undefined,
  dateFormat: undefined,
  separateDateWith: undefined,
  rest : {}
};
const MyDate = React.memo(MyComponent);
export default MyDate;