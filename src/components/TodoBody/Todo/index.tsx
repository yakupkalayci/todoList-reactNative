/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { ITodo } from '../../../App';

import styles from './Todo.style';

interface TodoProps {
  item: {
    id: string;
    title: string;
    done: boolean;
  };
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  deleteTodo: (id: string) => void;
}

function Todo(props: TodoProps): JSX.Element {
  const {
    item: {id, title, done}, deleteTodo, todos, setTodos} = props;


  const handlePress = () => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !done} : todo));
  };

  return (
    <TouchableOpacity
      style={[styles.container, done && styles.completed]}
      onPress={() => handlePress()}
      onLongPress={() => deleteTodo(id)}
      >
      <Text style={[styles.text, done && styles.completed]}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Todo;
