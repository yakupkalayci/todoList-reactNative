/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useId, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import TodoHeader from './components/TodoHeader';
import Todo from './components/TodoBody/Todo';
import TodoForm from './components/TodoFooter/TodoForm';

export interface ITodo {
  id: string;
  title: string;
  done: boolean;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [counter, setCounter] = useState<number>(0);
  const [todoInput, setTodoInput] = useState<string>('');
  const id = useId();

  const createStorage = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify([]));
    } catch (err) {
      console.log(err);
    }
  };

  const addNewTodo = async (todo: string): Promise<void> => {
    const newTodo: ITodo = {
      id: id + new Date().getTime(),
      title: todo,
      done: false,
    };

    setTodos(() => [...todos, newTodo]);
    setTodoInput('');
  };

  const deleteTodo = (id:string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        const allTodos = await AsyncStorage.getItem('todos');
        if (allTodos !== null) {
          setTodos(JSON.parse(allTodos));
        } else {
          await createStorage();
          try {
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);

  useEffect(() => {
    const addToStorage = async () => {
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (err) {
        console.log(err);
      }
    };

    const calcCounter = (): void => {
      const uncompletedTodos = todos.filter(todo => todo.done !== true);
      setCounter(uncompletedTodos.length);
    };

    addToStorage();
    calcCounter();
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TodoHeader title="Yapılacaklar" counter={counter} />
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <Todo
              item={{id: item.id, title: item.title, done: item.done}}
              todos={todos}
              setTodos={setTodos}
              deleteTodo={deleteTodo}
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
