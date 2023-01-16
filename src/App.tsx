/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import TodoHeader from './components/TodoHeader';
import Todo from './components/TodoBody/Todo';
import TodoForm from './components/TodoFooter/TodoForm';

interface ITodo {
  id: number;
  title: string;
  done: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader title="Yapılacaklar" counter={todos.length} />
      <Todo />
      <TodoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#063970',
    padding: 10,
  },
});

export default App;
