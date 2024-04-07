import React from 'react';
import StyledButton from './button'; // Ensure this path is correct
import ActivityIcon from './activity';
import useTaskStore from '@/state/tasks';

const TaskDetailsModal = ({ task, onClose }) => {
    if (!task) return null; // Return null if no task is passed
    const reloadTask = useTaskStore((state) => state.reloadTask);
    const newTime = useTaskStore((state) => state.newTime);

    const onRefresh = () => {
        // Call the reloadTask function here
        console.log('reload called');
        const copyTask = { ...task };
        reloadTask(copyTask);
        onClose();
    }

    const onUpdate = () => {
        const copyTask = { ...task };
        newTime(copyTask);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-5 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="flex items-center relative w-full text-left" >
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
                        <p className="text-sm">{task.description}</p>
                    </div>
                </div>

                <hr className="my-2 p-2" />

                {/* Displaying Task Information */}
                <div className="space-y-2">
                    {task.indoor && <p>Inside, therefore is weather information irrelevant.</p>}
                    <p><strong>Coordinates:</strong> {task.latitude}, {task.longitude}</p>
                    {task.reason && <p>{task.reason}</p>}
                </div>

                {/* Close Button */}
                <div className="mt-4 flex justify-between">
                    <StyledButton onClick={onRefresh}>Refresh</StyledButton>
                    {task.state==='error' && <StyledButton onClick={onUpdate}>Update</StyledButton>}
                    <StyledButton onClick={onClose}>Close</StyledButton>
                </div>
            </div>
        </div>
    );
};

export default TaskDetailsModal;
