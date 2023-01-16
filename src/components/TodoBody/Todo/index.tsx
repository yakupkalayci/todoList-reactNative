/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Todo.style';

interface TodoProps {
  item: {
    id: string;
    title: string;
    completed: boolean;
  };
  deleteTodo: (id: string) => void;
}

function Todo(props: TodoProps): JSX.Element {
  const {
    item: {id, title, completed}, deleteTodo} = props;

  const [done, setDone] = useState<boolean>(completed);

  const handlePress = () => {
    setDone(!done);
  };

  useEffect(() => {
    setDone(completed);
  }, [completed]);

  return (
    <TouchableOpacity
      style={[styles.container, done && styles.completed]}
      onPress={handlePress}
      onLongPress={() => deleteTodo(id)}
      >
      <Text style={[styles.text, done && styles.completed]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Todo;
