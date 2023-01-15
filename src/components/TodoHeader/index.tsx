/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

interface HeaderProps {
    title: string;
    counter: number;
}

function TodoHeader(props: HeaderProps): JSX.Element {
  const { title, counter } = props;

    return (
    <View>
        <Text>{title}</Text>
        <Text>{counter}</Text>
    </View>
  );
}

export default TodoHeader;
