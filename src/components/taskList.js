import React, { useState } from 'react';
import useTaskStore from '../state/tasks'; // Adjust the path accordingly
import ActivityIcon from './activity';
import EditTaskModal from './editTask'; // Adjust the path accordingly

function TaskList() {
    const tasks = useTaskStore((state) => state.tasks);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const updateTask = useTaskStore((state) => state.updateTask);

    const onSubmit = (data) => {
        const updateData = {
            ...task,
            ...data
        }
        console.log(updateData);
        updateTask(updateData);
        onClose();
    };

    const openModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <hr className="my-4" />
            <div>
                {tasks.map((task, index) => (
                    <div key={task.taskId} className="mb-4">
                        <button
                            className="flex items-center relative w-full text-left transition duration-500 ease-in-out transform"
                            onClick={() => openModal(task)}
                        >
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black transition-opacity duration-500">
                                <span className="text-white font-bold">EDIT</span>
                            </div>

                            {/* Task Icon */}
                            <div className="p-4 mr-4 flex-shrink-0">
                                <ActivityIcon activity={task.activity} />
                            </div>

                            {/* Task Content */}
                            <div className="flex-grow">
                                <h3 className="text-l font-semibold">{task.title}</h3>
                                <div className="flex items-center text-sm">
                                    <p>{task.date} {task.from}-{task.to}</p>
                                </div>
                                <p className="text-sm"><strong>Activity:</strong> {task.activity}</p>
                                <p className="text-sm">{task.description}</p>
                            </div>
                        </button>
                        {index !== tasks.length - 1 && <hr className="my-4" />}
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {isModalOpen && (
                <EditTaskModal task={selectedTask} onSubmit={onSubmit} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}

export default TaskList;
