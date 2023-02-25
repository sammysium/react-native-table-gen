import React, {useContext} from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {TouchableOpacity, Text, View} from 'react-native';
import ServiceSort from './ServiceSort';
import TableBuilder from './TableBuilder';

const mockNavigationProps = (props, params = {}) => ({
  navigation: {
    navigate: jest.fn((value) => {}),
    closeDrawer: jest.fn(),
    state: {
      params,
    },
    setParams: jest.fn((params = {}) => console.log('data')),
  },

  ...props,
});

describe('component TableBuilder', () => {
  const headers = [
    {
      label: 'Employee ID',
      fieldName: 'empId',
      sortable: false,
    },
    {
      label: 'Start Date',
      fieldName: 'regDate',
      sortable: true,
      flexWidth: 100,
      dataType: 'date',
    },
    {
      label: 'Amount Paid',
      fieldName: 'amount',
      dataType: 'currency',
      sortable: true,
      currencySymbol: '$',
      curencySymbolPosition: 'back',
    },
  ];

  const data = [
    {
      empId: 'eaf472f3-4705-49be-a16a-b5518f6016e2',
      regDate: '2020-02-29',
      amount: 5113,
    },
    {
      empId: '13f409ed-faab-42c9-8134-0f7bade42f07',
      regDate: '2020-02-16',
      amount: 5710,
    },
    {
      empId: 'cb249d29-13dc-4e26-818b-126b6de47994',
      regDate: '2019-09-09',
      amount: 9897,
    },
  ];

  it('renders correctly', () => {
    const snapShotTree = render(
      <TableBuilder
        headers={headers}
        data={data}
        defaultSortByField="regDate"
        defaultSortOrderBy="desc"
      />,
    ).toJSON();
    expect(snapShotTree).toMatchInlineSnapshot(`
      <View
        style={
          Object {
            "padding": 10,
          }
        }
      >
        <View
          style={
            Object {
              "backgroundColor": "#00ff00",
              "flexDirection": "row",
              "height": 50,
            }
          }
        >
          <View
            style={
              Object {
                "borderWidth": 1,
                "flex": 1,
                "padding": 3,
              }
            }
          >
            <View
              accessibilityHint="Employee ID"
              accessible={true}
              focusable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                }
              }
            >
              <Text>
                Employee ID
              </Text>
            </View>
          </View>
          <View
            style={
              Object {
                "borderWidth": 1,
                "flex": 1,
                "padding": 3,
              }
            }
          >
            <View
              accessibilityHint="Start Date"
              accessible={true}
              focusable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                }
              }
            >
              <Text>
                Start Date
              </Text>
            </View>
          </View>
          <View
            style={
              Object {
                "borderWidth": 1,
                "flex": 1,
                "padding": 3,
              }
            }
          >
            <View
              accessibilityHint="Amount Paid"
              accessible={true}
              focusable={true}
              onClick={[Function]}
              onResponderGrant={[Function]}
              onResponderMove={[Function]}
              onResponderRelease={[Function]}
              onResponderTerminate={[Function]}
              onResponderTerminationRequest={[Function]}
              onStartShouldSetResponder={[Function]}
              style={
                Object {
                  "opacity": 1,
                }
              }
            >
              <Text>
                Amount Paid
              </Text>
            </View>
          </View>
        </View>
        <View
          accessibilityHint="records"
        >
          <View
            style={
              Object {
                "flexDirection": "row",
                "height": 50,
              }
            }
          >
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                testID="empId_0"
              >
                eaf472f3-4705-49be-a16a-b5518f6016e2
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 20,
                  }
                }
              >
                2020-02-29
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 10,
                  }
                }
              >
                5,113.00 $
              </Text>
            </View>
          </View>
          <View
            style={
              Object {
                "backgroundColor": "#fbeee4",
                "flexDirection": "row",
                "height": 50,
              }
            }
          >
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                testID="empId_1"
              >
                13f409ed-faab-42c9-8134-0f7bade42f07
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 20,
                  }
                }
              >
                2020-02-16
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 10,
                  }
                }
              >
                5,710.00 $
              </Text>
            </View>
          </View>
          <View
            style={
              Object {
                "flexDirection": "row",
                "height": 50,
              }
            }
          >
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                testID="empId_2"
              >
                cb249d29-13dc-4e26-818b-126b6de47994
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 20,
                  }
                }
              >
                2019-09-09
              </Text>
            </View>
            <View
              style={
                Object {
                  "borderWidth": 1,
                  "flex": 1,
                  "padding": 3,
                }
              }
            >
              <Text
                style={
                  Object {
                    "color": "#000",
                    "marginBottom": 4,
                    "marginRight": 10,
                  }
                }
              >
                9,897.00 $
              </Text>
            </View>
          </View>
        </View>
      </View>
    `);
  });

  it('displays all colums and rows', async () => {
    const baseRows = Object.keys(data[0]).length + 1; // each record has this columns/keys. each row has acontainer view as well
    // so a record  of 3 cols requires 4 Views. Parent view to hold all the other views.
    // if we have 3 records, then the total number of Views is 4 * 3
    jest
      .spyOn(ServiceSort, 'genericDictArraySort')
      .mockImplementation(() => data);

    const spy = jest.spyOn(ServiceSort, 'genericDictArraySort');
    const wrapper = render(
      <TableBuilder
        headers={headers}
        data={data}
        defaultSortByField="regDate"
        defaultSortOrderBy="desc"
      />,
    );

    // should try to load sorted data by default
    expect(spy).toHaveBeenCalledWith(data, 'regDate', 'date', 'desc');

    spy.mockClear();
    const columns = wrapper.UNSAFE_getAllByType(TouchableOpacity);
    expect(columns).toHaveLength(headers.length);

    expect(columns[0].findByType(Text)).toBeTruthy();
    expect(columns[0].findByType(Text).props.children).toStrictEqual(
      'Employee ID',
    );
    fireEvent.press(columns[0]);
    expect(spy).not.toHaveBeenCalled();

    expect(columns[1].findByType(Text)).toBeTruthy();
    expect(columns[1].findByType(Text).props.children).toStrictEqual(
      'Start Date',
    );
    fireEvent.press(columns[1]);
    expect(spy).toHaveBeenCalledWith(data, 'regDate', 'date', 'asc');

    // NOTE: asc here because at load, it is asc by regDate so clicking the column switchs it to asc automcally
    // click again to order it by desc

    spy.mockClear();
    fireEvent.press(columns[1]);
    expect(spy).toHaveBeenCalledWith(data, 'regDate', 'date', 'desc');

    spy.mockClear();
    expect(columns[2].findByType(Text)).toBeTruthy();
    expect(columns[2].findByType(Text).props.children).toStrictEqual(
      'Amount Paid',
    );

    fireEvent.press(columns[2]);
    expect(spy).toHaveBeenCalledWith(data, 'amount', 'number', 'asc');

    const view = wrapper.getByA11yHint('records');
    const rows = await view.findAllByType(View);
    expect(rows).toHaveLength(data.length * baseRows);
  });

  it('should display row number column', async () => {
    const wrapper = render(
      <TableBuilder
        headers={headers}
        data={data}
        defaultSortByField="regDate"
        defaultSortOrderBy="desc"
        includeCountingColumn={true}
      />,
    );

    const rowNumCol = wrapper.getByA11yHint('rowNumber')  //wrapper.getByHintText('rowNumber');

    expect(rowNumCol).toBeTruthy();

    const columns = wrapper.UNSAFE_getAllByType(TouchableOpacity);
    expect(columns).toHaveLength(headers.length);
    expect(columns[0].findByType(Text)).toBeTruthy();
    expect(columns[0].findByType(Text).props.children).toStrictEqual(
      'Employee ID',
    );

    expect(columns[1].findByType(Text)).toBeTruthy();
    expect(columns[1].findByType(Text).props.children).toStrictEqual(
      'Start Date',
    );

    expect(columns[2].findByType(Text)).toBeTruthy();
    expect(columns[2].findByType(Text).props.children).toStrictEqual(
      'Amount Paid',
    );

    const view = wrapper.getByA11yHint('records');
    const texts = view.findAllByType(Text);
    expect(texts[0].props.children).toStrictEqual(1);
    expect(texts[4].props.children).toStrictEqual(2);
    expect(texts[8].props.children).toStrictEqual(3);
  });

  it('should navigate to another page', async () => {
    const navigation = mockNavigationProps({});

    headers[0]['link'] =  {
      routeName: 'empDetail',
      routeParameters: {
        empId: undefined,
      },
    };


    const wrapper = render(
      <TableBuilder
        headers={headers}
        data={data}
        defaultSortByField="regDate"
        defaultSortOrderBy="desc"
        navigation={navigation.navigation}
      />,
    );

    const emp_0 = await wrapper.findByTestId('empId_0');
    fireEvent.press(emp_0);
    expect(navigation.navigation.navigate).toHaveBeenCalledWith('empDetail', {
      empId: 'eaf472f3-4705-49be-a16a-b5518f6016e2',
    });

    const emp_1 = await wrapper.findByTestId('empId_1');
    fireEvent.press(emp_1);
    expect(navigation.navigation.navigate).toHaveBeenCalledWith('empDetail', {
      empId: '13f409ed-faab-42c9-8134-0f7bade42f07',
    });

    const emp_2 = await wrapper.findByTestId('empId_2');
    fireEvent.press(emp_2);
    expect(navigation.navigation.navigate).toHaveBeenCalledWith('empDetail', {
      empId: 'cb249d29-13dc-4e26-818b-126b6de47994',
    });
  });
});
