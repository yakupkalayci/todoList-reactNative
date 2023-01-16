/* eslint-disable prettier/prettier */
import { StyleSheet, TextStyle, ViewStyle, } from "react-native";

type TodoFormStyle = {
  container: ViewStyle;
  input: TextStyle
};

export default StyleSheet.create<TodoFormStyle>({
    container: {
        backgroundColor: '#38618d',
        borderRadius: 12,
        padding: 15,
    },
    input: {
        borderBottomColor: '#063970',
        borderBottomWidth: 3,
        marginBottom: 15,
        color: '#fff',
        fontSize: 17,
    },
});
