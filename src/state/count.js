import {create} from 'zustand';
import {produce} from 'immer';

export const useCountStore = create((set, get) => ({
    count: 0,
    increase: () => {
        set(produce((state) => {
            console.log('asdf');
            state.count += 1;
        }));
    },
    add: (num) => {
        set(produce((state) => {
            state.count += num;
        }));
    },
}));
