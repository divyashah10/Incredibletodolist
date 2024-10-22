import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const ToDoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={newTask}
        onChangeText={setNewTask}
        placeholder="Add a new task"
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { marginTop: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }
});

export default ToDoForm;
