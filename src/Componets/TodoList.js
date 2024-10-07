import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
 
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleAddTask = (e) => {
    e.preventDefault(); 
    if (inputValue.trim() === '') return; 

    setTasks([...tasks, inputValue]); 
    setInputValue('');
  };


  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(newTasks); 
  };

  return (
    <div className="todo-list-container" style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className="text-center">To-Do List</h2>

      <form onSubmit={handleAddTask} style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 15px', marginLeft: '10px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff' }}>
          Add
        </button>
      </form>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #ccc' }}>
            <span>{task}</span>
            <button onClick={() => handleRemoveTask(index)} style={{ background: 'none', border: 'none', color: '#ff0000', cursor: 'pointer' }}>
             <DeleteIcon/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
