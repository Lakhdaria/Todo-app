import { useState } from 'react';

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Fonction pour ajouter une tâche
    const addTask = () => {
        if (task) {
            setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
            setTask('');
        }
    };

    // Fonction qui marque la tâche comme terminée
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map((task) =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    // Fonction pour supprimer la tâche
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className='max-w-md mx-auto p-4'>
            <h1 className='text-4xl font-bold text-center mb-4'>Todo App</h1>

            <div className='mb-4 flex'>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className='border-2 border-gray-300 p-2 w-full rounded-l-md'
                    placeholder='Ajouter une tâche'
                />

                <button
                    onClick={addTask}
                    className='bg-blue-500 text-white p-2 rounded-r-md'>
                    Ajouter
                </button>
            </div>

            <ul className='space-y-2'>
                {tasks.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                        toggleTaskCompletion={toggleTaskCompletion}
                        deleteTask={deleteTask}
                    />
                ))}
            </ul>
        </div>
    );
};

const TodoItem = ({ task, toggleTaskCompletion, deleteTask }) => (
    <li className={`flex justify-between p-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
        <span onClick={() => toggleTaskCompletion(task.id)} className='cursor-pointer'>
            {task.text}
        </span>
        <button onClick={() => deleteTask(task.id)} className='text-red-500'>
            Supprimer
        </button>
    </li>
);

export default TodoApp;
