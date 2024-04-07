import { create } from 'zustand';
import { produce } from 'immer';
import { backendUrl } from '../constant';

const initialTasks = [];

const useTaskStore = create((set, get) => ({
    messages: [],
    loading: false,
    tasks: initialTasks,
    currentTask: null,
    newTime: async (task) => {
        set(produce((state) => {
            const taskIndex = state.tasks.findIndex(t => t.taskId === task.taskId);
            state.tasks[taskIndex].state = 'loading';
        }));
        try {
            const response = await fetch(`${backendUrl}/new_time`, {
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
                const taskIndex = state.tasks.findIndex(t => t.taskId === task.taskId);
                console.log(taskIndex);
                console.log(data.suitable)
                if (data.suitable) {
                    console.log('I am here')
                    state.tasks[taskIndex].state = 'ok';
                    state.tasks[taskIndex].reason = data.reason;
                } else {
                    console.log('Sadly I am here')
                    state.tasks[taskIndex].state = 'error';
                    state.tasks[taskIndex].reason = data.reason;
                }
                state.loading = false;
            }));
        } catch (error) {
            console.error(error);
        }
    },
    reloadTask: async (updateTask) => {
        set(produce((draftState) => {
            const task = draftState.tasks.find(t => t.taskId === updateTask.taskId);
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
                body: JSON.stringify(updatedTask)
            });
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }

            const data = await response.json();

            set(produce((state) => {
                const taskIndex = state.tasks.findIndex(t => t.taskId === updateTask.taskId);
                console.log(taskIndex);
                console.log(data.suitable)
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
        get().reloadTask(updatedTask);
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
            get().reloadTask(get().tasks[state.tasks.length - 1]);
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