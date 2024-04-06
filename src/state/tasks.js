import { create } from 'zustand';
import { produce } from 'immer';

const initialTasks = [
    {
        taskId: 1,
        title: 'Team Meeting',
        date: '2024-04-08',
        from: '09:00',
        to: '10:00',
        activity: 'meeting',
        description: 'Discuss project updates',
        sheltered: true,
        latitude: '40.7128',
        longitude: '-74.0060'
    },
    {
        taskId: 2,
        title: 'Client Call',
        date: '2024-04-08',
        from: '11:00',
        to: '11:30',
        activity: 'meeting',
        description: 'Call with client to discuss requirements',
        sheltered: false,
        latitude: '51.5074',
        longitude: '-0.1278'
    },
    {
        taskId: 3,
        title: 'Client Call',
        date: '2024-04-08',
        from: '12:00',
        to: '14:30',
        activity: 'running',
        description: 'Call with client to discuss requirements',
        sheltered: false,
        latitude: '51.5074',
        longitude: '-0.1278'
    }
    // Add more initial tasks as needed
];

const useTaskStore = create((set) => ({
    tasks: initialTasks,
    addTask: (task) => {
        set(produce((state) => {
            state.tasks.push(task);
        }));
    },
    updateTask: (updatedTask) => {
        set(produce((state) => {
            console.log(updatedTask);
            console.log(state.tasks);
            const taskIndex = state.tasks.findIndex(task => task.taskId === updatedTask.taskId);
            console.log(taskIndex);
            if (taskIndex !== -1) {
                state.tasks[taskIndex] = updatedTask;
            }
        }));
    }
}));

export default useTaskStore;