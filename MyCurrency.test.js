import React from 'react';
import { Text } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import MyCurrency from './MyCurrency';

describe('component MyCurrency', () => {
  const amount = 2989;
  const currency = "rwf"
  it('renders correctly', () => {
    const snapShotTree = render(<MyCurrency amount={amount} currencySymbol={currency} />).toJSON();
    expect(snapShotTree).toMatchSnapshot();
  });

  it('should return formatted currency', () => {
    const App = () => (
      <>
        <MyCurrency amount={amount} currencySymbol={currency} />
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `${currency} 2,989.00`;
    expect(label.props.children).toStrictEqual(lbl);
  });

  it('should return formatted currency - symbol back', () => {
    const App = () => (
      <>
        <MyCurrency amount={amount} curencySymbolPosition="back"  currencySymbol={currency}/>
      </>
    );

    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    const lbl = `2,989.00 ${currency}`;
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
        <MyCurrency amount={amount} {...events} currencySymbol={currency}/>
      </>
    );
      const spy = jest.spyOn(console,'log')
    const wrapper = render(<App />);
    const label = wrapper.UNSAFE_getByType(Text);
    fireEvent.press(label)
    expect(spy).toHaveBeenCalled();
  });
});
