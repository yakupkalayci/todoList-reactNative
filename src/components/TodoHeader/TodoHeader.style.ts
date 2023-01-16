/* eslint-disable prettier/prettier */
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

type HeaderStyle = {
    container: ViewStyle;
    text: TextStyle;
};

export default StyleSheet.create<HeaderStyle>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  text: {
    color: '#e28743',
    fontSize: 42,
    fontWeight: 'bold',
  },
});
