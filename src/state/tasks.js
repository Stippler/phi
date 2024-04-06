import { create } from 'zustand';
import { produce } from 'immer';

const initialTasks = [
    {
        title: 'Team Meeting',
        date: '2024-04-08',
        from: '09:00',
        to: '10:00',
        activity: 'Meeting',
        description: 'Discuss project updates',
        location: 'Inside',
        latitude: '40.7128',
        longitude: '-74.0060'
    },
    {
        title: 'Client Call',
        date: '2024-04-08',
        from: '11:00',
        to: '11:30',
        activity: 'Call',
        description: 'Call with client to discuss requirements',
        location: 'Outside',
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
}));

export default useTaskStore;