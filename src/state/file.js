import { create } from 'zustand';
import { produce } from 'immer';

const useFileManagerStore = create((set) => ({
    files: [],
    addFile: (file) =>
        set((state) =>
            produce(state, (draft) => {
                draft.files.push(file);
            })
        ),
    removeFile: (fileId) =>
        set((state) =>
            produce(state, (draft) => {
                draft.files = draft.files.filter((file) => file.id !== fileId);
            })
        ),
}));

export default useFileManagerStore;