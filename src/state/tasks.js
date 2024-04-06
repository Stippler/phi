import {create} from 'zustand';
import {produce} from 'immer';

export const useCountStore = create((set, get) => ({
    tasks: [],
    add: (task) => {
        set(produce((state) => {
            state.tasks.add(task);
        }));
    },
}));
