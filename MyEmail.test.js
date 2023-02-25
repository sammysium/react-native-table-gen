import React from 'react';
import { Text, Linking } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import MyEmail from './MyEmail';

describe('component MyEmail', () => {
  const email = 'email@example.com';
  it('renders correctly', () => {
    const snapShotTree = render(<MyEmail email={email} />).toJSON();
    expect(snapShotTree).toMatchSnapshot();
  });

  it('should display the passed email', () => {
    const App = () => (
      <>
        <MyEmail email={email} />
      </>
    );
    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    expect(label.props.children).toStrictEqual(email);
  });

  it('should open email client', () => {
    const App = () => (
      <>
        <MyEmail email={email} />
      </>
    );

    const spy = jest.spyOn(Linking,'openURL');

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    fireEvent.press(label);
    expect(spy).toHaveBeenCalledWith(`mailto:${email}`)
  });
});
