import { create } from 'zustand';
import { produce } from 'immer';
import { backendUrl } from '../constant';

const initialTasks = [
];

const useTaskStore = create((set, get) => ({
    messages: [
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
            const payload = {
                'messages': get().messages,
                'task': get().currentTask
            }
            console.log(payload);
            console.log(JSON.stringify(payload));
            const response = await fetch(`${backendUrl}/text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
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
            console.log(data);
            set(produce((state) => {
                state.messages.push(data.message);
                if (data.success) {
                    data.task.taskId = state.tasks.length;
                    state.tasks.push(data.task);
                    state.currentTask = null;
                } else {
                    state.currentTask = data.task;
                }
                state.loading = false;
            }));
        } catch (error) {
            console.error(error);
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