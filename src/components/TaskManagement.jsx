import React, { useState } from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 2rem; /* Added top padding for better spacing */
`;

const TaskCard = styled.div`
  background-color: #2a2a2a;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

const EditButton = styled(Button)`
  background-color: #2196f3;
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
`;

function TaskManagement() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Define MVP', status: 'In Progress', description: 'Outline the core features for the MVP.', dependencies: [] },
    { id: 2, name: 'Resource Allocation', status: 'Pending', description: 'Allocate resources for the project.', dependencies: [1] },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [newTask, setNewTask] = useState({ name: '', status: '', description: '', dependencies: [] });

  const addTask = () => {
    const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { ...newTask, id: newId }]);
    setNewTask({ name: '', status: '', description: '', dependencies: [] });
  };

  const editTask = (id) => {
    setEditingId(id);
    const task = tasks.find((t) => t.id === id);
    setNewTask({ name: task.name, status: task.status, description: task.description, dependencies: task.dependencies });
  };

  const saveTask = () => {
    setTasks(tasks.map((t) => (t.id === editingId ? { ...t, ...newTask } : t)));
    setEditingId(null);
    setNewTask({ name: '', status: '', description: '', dependencies: [] });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <TaskContainer>
      <h2>Task Management</h2>
      <Input
        type="text"
        placeholder="Task Name"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Status"
        value={newTask.status}
        onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      {editingId ? (
        <Button onClick={saveTask}>Save Task</Button>
      ) : (
        <Button onClick={addTask}>Add New Task</Button>
      )}
      {tasks.map((task) => (
        <TaskCard key={task.id}>
          <h3>{task.name}</h3>
          <p>Status: {task.status}</p>
          <p>{task.description}</p>
          <EditButton onClick={() => editTask(task.id)}>Edit</EditButton>
          <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
        </TaskCard>
      ))}
    </TaskContainer>
  );
}

export default TaskManagement;
