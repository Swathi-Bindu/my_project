import React, { useState } from 'react';

const TaskStatus = () => {
  const [status, setStatus] = useState('Pending');

  const handleStatusUpdate = (newStatus: any) => {
    setStatus(newStatus);
  };

  return (
    <div>
      <h2>Task Status</h2>
      <p>Status: {status}</p>
      <button onClick={() => handleStatusUpdate('In Progress')}>Start Task</button>
      <button onClick={() => handleStatusUpdate('Completed')}>Complete Task</button>
    </div>
  );
};

export default TaskStatus;
