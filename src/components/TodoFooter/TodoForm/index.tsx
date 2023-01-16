/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, TextInput, Button} from 'react-native';

import styles from './TodoForm.style';

interface TodoFormProps {
  addNewTodo: (todo: string) => void;
  todoInput: string;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
}

function TodoForm(props: TodoFormProps): JSX.Element {
  const {addNewTodo, todoInput, setTodoInput} = props;

  const [isButtonActive, setIsButtonActive] = useState(true);

  const handleChange = (text: string) => {
    setTodoInput(text);
  };

  useEffect(() => {
    if (todoInput.length) {
      setIsButtonActive(false);
    } else {
      setIsButtonActive(true);
    }
  }, [todoInput]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacak...."
        value={todoInput}
        onChangeText={text => handleChange(text)}
      />
      <Button
        title="Kaydet"
        color="#e28743"
        onPress={() => addNewTodo(todoInput)}
        disabled={isButtonActive}
      />
    </View>
  );
}

export default TodoForm;
