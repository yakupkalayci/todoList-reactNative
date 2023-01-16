/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import {styles} from "./TodoHeader.styles";

interface HeaderProps {
    title: string;
    counter: number;
}

function TodoHeader(props: HeaderProps): JSX.Element {
  const { title, counter } = props;

    return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{counter}</Text>
    </View>
  );
}

export default TodoHeader;
