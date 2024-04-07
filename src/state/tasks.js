import { create } from 'zustand';
import { produce } from 'immer';
import { backendUrl } from '../constant';

const initialTasks = [
    {
        "activity": "running",
        "date": "2024-04-08",
        "description": "Run in Prater in Vienna",
        "endTime": "12:00",
        "latitude": 48.2156,
        "longitude": 16.3878,
        "reason": null,
        "indoor": false,
        "startTime": "08:00",
        "state": "loading",
        "taskId": 0,
        "title": "Morning Run in Prater",
    }
];

const useTaskStore = create((set, get) => ({
    messages: [],
    loading: false,
    tasks: initialTasks,
    currentTask: null,
    reloadTask: async (updateTask) => {
        const task = get().tasks.find(task => task.taskId === updateTask.taskId);
        // const task = state.tasks.find(task => task.taskId === updateTask.taskId);
        set(produce((draftState) => {
            const task = draftState.tasks.find(t => t.id === updateTask.id);
            if (task) {
                task.state = 'loading';
            }
        }));
        try {
            const response = await fetch(`${backendUrl}/weather`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            set(produce((state) => {
                const taskIndex = state.tasks.findIndex(t => t.taskId === updateTask.taskId);
                console.log(taskIndex);
                if (data.suitable) {
                    state.tasks[taskIndex].state = 'ok';
                    state.tasks[taskIndex].reason = data.reason;
                } else {
                    state.tasks[taskIndex].state = 'error';
                    state.tasks[taskIndex].reason = data.reason;
                }
            }));
        } catch (error) {
            console.error(error);
        }
    },
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
    checkTask: (task) => {
        set(produce((state) => {

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
                    data.task.state = 'loading';
                    data.task.reason = null;
                    console.log(data.task);
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