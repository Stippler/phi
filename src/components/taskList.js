import React, { useState } from 'react';
import useTaskStore from '../state/tasks'; // Adjust the path accordingly
import ActivityIcon from './activity';
import EditTaskModal from './editTask'; // Adjust the path accordingly

function TaskList() {
    const tasks = useTaskStore((state) => state.tasks);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const updateTask = useTaskStore((state) => state.updateTask);
    const reloadTask = useTaskStore((state) => state.reloadTask);

    const onSubmit = (data) => {
        const updateData = {
            ...data
        }
        console.log(updateData);
        updateTask(updateData);
        setModalOpen(false);
    };

    const onReload = (task) => {
        console.log(task)
        reloadTask(task);
    };

    const openModal = (task) => {
        setSelectedTask(task);
        setModalOpen(true);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Task List</h2>
            <hr className="my-4" />
            <div>
                {tasks.map((task, index) => (
                    <div key={task.taskId} className="mb-4 flex gap-4">
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
                                    <p>{task.date} {task.startTime}-{task.endTime}</p>
                                </div>
                                <p className="text-sm"><strong>Activity:</strong> {task.activity}</p>
                                <p className="text-sm">{task.description}</p>
                            </div>


                        </button>
                        {/* Loading Element */}
                        {task.state == 'loading' && (
                            <button onClick={()=>{onReload(task)}}>
                                <div className="flex items-center justify-center">
                                    <p className="text-sm text-gray-500">Loading...</p>
                                </div>
                            </button>
                        )}
                        {task.state == 'ok' && (
                            <button onClick={()=>{onReload(task)}}>
                                <ActivityIcon activity="ok" />
                            </button>
                        )}
                        {index !== tasks.length - 1 && <hr className="my-4" />}
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {modalOpen && (
                <EditTaskModal task={selectedTask} onSubmit={onSubmit} onClose={() => setModalOpen(false)} />
            )}
        </div>
    );
}

export default TaskList;
