import { create } from 'zustand';
import { produce } from 'immer';
import { backendUrl } from '../constant';

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

const useTaskStore = create((set, get) => ({
    messages: [
        'Hey, can you please add a team meeting task at 9:00 AM on 8th April 2024?',
        'Yes! Here is the task details: Team Meeting at 9:00 AM on 8th April 2024. Discuss project updates.',
        'Hey, can you please add a team meeting task at 9:00 AM on 8th April 2024?',
        'Yes! Here is the task details: Team Meeting at 9:00 AM on 8th April 2024. Discuss project updates.',
        'Hey, can you please add a team meeting task at 9:00 AM on 8th April 2024?',
        'Yes! Here is the task details: Team Meeting at 9:00 AM on 8th April 2024. Discuss project updates.',
    ],
    loading: false,
    tasks: initialTasks,
    currentTask: null,
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
    },
    sendMessage: async (message) => {
        set(produce((state) => {
            state.messages.push(message);
            state.loading = true;
        }));
        try {
            const response = await fetch(`${backendUrl}/text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'messages': get().messages,
                    'task': get().currentTask
                })
            });
            if (!response.ok) {
                const errorData = await response.json(); // Get the error details from response
                throw new Error(`HTTP error ${response.status}: ${errorData.message}`); // Throw an error to be caught
            }
            const data = await response.json();
            /*
                data => 
                {
                    'success': true,
                    'task': {...},
                    'message': 'Tasks added successfully, please check if you see them in the list.'
                }
            */
            set(produce((state) => {
                state.messages.push(data.message);
                if(data.success) {
                    state.tasks.push(data.task);
                    state.currentTask = null;
                } else{
                    state.currentTask = data.task;
                }
                state.loading = false;
            }));
        } catch (error) {
            console.error(error);
            console.log('catch was called')
            set(produce((state) => {
                console.log(state.messages);
                state.messages.push('An error occurred while sending the message, please try again later.');
                state.loading = false;
            }));
        }
    },
    setTasks: (tasks) => {
        set(produce((state) => {
            state.tasks = tasks;
        }
        ));
    }
}));

export default useTaskStore;