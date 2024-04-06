import { create } from 'zustand';
import { produce } from 'immer';

const useTestStore = create((set) => ({
    message: "",
    updateMessage: async () => {
        try {
            const response = await fetch('http://localhost:3000/');
            const data = await response.json();
            set(produce((state) => {
                state.message = data.message;
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}));

export default useTestStore;