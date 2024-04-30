import React, { useState } from 'react';

const TaskAssignment = () => {
  const [users, setUsers] = useState(['User A', 'User B', 'User C']);
  const [assignedUser, setAssignedUser] = useState('');

  const handleAssignTask = (user: any) => {
    setAssignedUser(user);
  };

  return (
    <div>
      <h2>Task Assignment</h2>
      <p>Assign Task To:</p>
      <ul>
        {users.map((user) => (
          <li key={user}>
            <button onClick={() => handleAssignTask(user)}>{user}</button>
          </li>
        ))}
      </ul>
      {assignedUser && <p>Assigned to: {assignedUser}</p>}
    </div>
  );
};

export default TaskAssignment;
