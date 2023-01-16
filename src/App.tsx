/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useId} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

import TodoHeader from './components/TodoHeader';
import Todo from './components/TodoBody/Todo';
import TodoForm from './components/TodoFooter/TodoForm';

interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todoInput, setTodoInput] = useState<string>('');
  const id = useId();

  const addNewTodo = (todo: string): void => {
    const newTodo: ITodo = {
      id: id + new Date().getTime(),
      title: todo,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setTodoInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TodoHeader title="Yapılacaklar" counter={todos.length} />
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Todo
              item={{id: item.id, title: item.title, completed: item.done}}
            />
          )}
        />
      </View>
      <TodoForm
        addNewTodo={addNewTodo}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
      />
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
