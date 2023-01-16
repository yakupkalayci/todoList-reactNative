/* eslint-disable prettier/prettier */
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type TodoStyle = {
  container: ViewStyle;
  text: TextStyle;
  completed: TextStyle
};

export default StyleSheet.create<TodoStyle>({
  container: {
    backgroundColor: '#51b536',
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  text: {
    fontSize: 21,
    color: '#fff',
    paddingLeft: 5,
  },
  completed: {
    textDecorationLine: 'line-through',
    backgroundColor: '#38618d',
    color: '#e6ebf1',
  },
});
