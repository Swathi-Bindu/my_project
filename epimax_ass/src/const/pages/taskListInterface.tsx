import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: newTask }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task: any) => (
          <li key={task?.id}>{task?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
