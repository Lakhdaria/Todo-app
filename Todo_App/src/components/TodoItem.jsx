import React from 'react';

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => {
    return (
        <li className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
            className="w-5 h-5"
          />
          <span
            className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
          >
            {task.text}
          </span>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500"
          >
            Supprimer
          </button>
        </li>
      );
    }
    
    export default TodoItem;