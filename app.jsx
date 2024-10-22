// App.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  // Initialize state for tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries' },
    { id: 2, text: 'Walk the dog' },
    { id: 3, text: 'Finish homework' }
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, { id: tasks.length + 1, text: taskText }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      {/* Render ToDoList with tasks */}
      <ToDoList tasks={tasks} />
      {/* Render ToDoForm with addTask function */}
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, marginBottom: 20 }
});
