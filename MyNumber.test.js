import React from 'react';
import { Text } from 'react-native';
import { render , fireEvent } from 'react-native-testing-library';
import MyNumber from './MyNumber';

describe('component MyNumber', () => {
  const value = 2989;
  it('renders correctly', () => {
    const snapShotTree = render(<MyNumber value={value} decimalsToShow={2} />).toJSON();
    expect(snapShotTree).toMatchSnapshot();
  });

  
  it('should return 2 decimal number', () => {
    const App = () => (
      <>
        <MyNumber value={value} decimalsToShow={2} />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `2,989.00`;
    expect(label.props.children).toStrictEqual(lbl);
  });

   
  it('should return 0 decimal number', () => {
    const App = () => (
      <>
        <MyNumber value={value} decimalsToShow={0} />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `2989`;
    expect(label.props.children).toStrictEqual(lbl);
  });

     
  it('should return rounded 0 decimal number', () => {
    const App = () => (
      <>
        <MyNumber value={350.9889} decimalsToShow={0} />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `351`;
    expect(label.props.children).toStrictEqual(lbl);
  });

       
  it('should return rounded 2 decimal number', () => {
    const App = () => (
      <>
        <MyNumber value={350.9889} decimalsToShow={2} />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `350.99`;
    expect(label.props.children).toStrictEqual(lbl);
  });

  it('should be pressed ', () => {
    const events = {
      onPress: jest.fn(()=>{
        console.log('pressed');
      })
    }
    const App = () => (
      <>
        <MyNumber value={350.9889} {...events} decimalsToShow={2} />
      </>
    );
      const spy = jest.spyOn(console,'log')
    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    fireEvent.press(label)
    expect(spy).toHaveBeenCalled();
  });

});
