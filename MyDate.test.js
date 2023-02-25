import React from 'react';
import { Text } from 'react-native';
import { render , fireEvent } from 'react-native-testing-library';
import MyDate from './MyDate';

describe('component MyDate', () => {
  const utcDateTime = '2020-05-03 01:45:31';

  it('renders correctly', () => {
    const snapShotTree = render(<MyDate value={utcDateTime} />).toJSON();
    expect(snapShotTree).toMatchInlineSnapshot(`
      <Text
        style={
          Object {
            "color": "#000",
            "marginBottom": 4,
            "marginRight": 20,
          }
        }
      >
        2020-05-03
      </Text>
    `);
  });

  it('should render date only in yyyy-mm-dd format for timezoned dates', () => {
    const App = () => (
      <>
        <MyDate value={utcDateTime} testID="control" returnDate />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('2020-05-03');
  });

  it('should render date only with custom separator', () => {
    const App = () => (
      <>
        <MyDate
          value={utcDateTime}
          testID="control"
          returnDate
          separateDateWith="."
        />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('2020.05.03');
  });

  it('should render date in custom format dd-mm-yyyy', () => {
    const App = () => (
      <>
        <MyDate
          value={utcDateTime}
          testID="control"
          returnDate
          dateFormat="dd-mm-yyyy"
        />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('03-05-2020');
  });

  it('should render date in custom format mm-dd-yyyy', () => {
    const App = () => (
      <>
        <MyDate
          value={utcDateTime}
          testID="control"
          returnDate
          dateFormat="mm-dd-yyyy"
        />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('05-03-2020');
  });

  it('should render time only in hh:mm format for timezoned dates', () => {
    const App = () => (
      <>
        <MyDate value={utcDateTime} testID="control" returnTime returnDate={false} />
      </>
    );
    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('01:45');
  });

  it('should render time only in hh:mm:ss format for timezoned dates', () => {
    const App = () => (
      <>
        <MyDate
          value={utcDateTime}
          testID="control"
          returnTime
          timeFormat="hh:mm:ss"
          returnDate={false}
        />
      </>
    );
    const wrapper = render(<App />);
    // const element = wrapper.getByTestId('control');
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual('01:45:31');
  });

  it('should be pressed', () => {
    const events = {
      onPress: jest.fn(()=>{
        console.log('pressed');
      })
    }
    const App = () => (
      <>
        <MyDate
          value={utcDateTime}
          testID="control"
          returnTime
          timeFormat="hh:mm:ss"
          returnDate={false}
          {...events}
        />
      </>
    );
    const spy = jest.spyOn(console,'log')
    const wrapper = render(<App />);
    // const element = wrapper.getByTestId('control');
    const label = wrapper.UNSAFE_getByType(Text);
    fireEvent.press(label)
    expect(spy).toHaveBeenCalled();
  });
});
