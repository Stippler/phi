import React from 'react';
import useTaskStore from '../state/tasks'; // Adjust the path accordingly

function TaskList() {
    const tasks = useTaskStore((state) => state.tasks);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <hr className="my-4" />
            <div>
                {tasks.map((task, index) => (
                    <div key={index} className="mb-4 p-4">
                        <h3 className="text-xl font-semibold">{task.title}</h3>
                        <p><strong>Date:</strong> {task.date}</p>
                        <p><strong>Time:</strong> {task.from} - {task.to}</p>
                        <p><strong>Activity:</strong> {task.activity}</p>
                        <p><strong>Description:</strong> {task.description}</p>
                        <p><strong>Location:</strong> {task.location}</p>
                        <p><strong>GPS:</strong> {task.latitude}, {task.longitude}</p>
                        {index !== tasks.length - 1 && <hr className="my-4" />}
                    </div>
                ))}
            </div>
            <hr className="my-4" />
        </div>
    );
}

export default TaskList;
