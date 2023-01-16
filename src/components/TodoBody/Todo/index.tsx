/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Todo.style';

interface TodoProps {
  item: {
    id: string
    title: string;
    completed: boolean;
  }
};

function Todo(props: TodoProps): JSX.Element {

  const {item: {id, title, completed}} = props;

  const [done, setDone] = useState<boolean>(completed);

  useEffect(() => {
    setDone(completed);
}, [completed ]);

  const handlePress = () => {
    setDone(!done);
  };

  return (
    <TouchableOpacity style={[styles.container, done && styles.completed]} onPress={handlePress}>
      <Text style={[styles.text, done && styles.completed]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Todo;
