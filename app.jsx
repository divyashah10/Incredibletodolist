import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) { 
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ToDoForm addTask={addTask} />
      
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#d3e0ea',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
});
