/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import TodoHeader from './components/TodoHeader';
import Todo from './components/TodoBody/Todo';
import TodoForm from './components/TodoFooter/TodoForm';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <TodoHeader title="Todo List" counter={0} />
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
  }
});

export default App;
