import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  documents: [
    { id: "1", title: "Документ 1", status: "in-progress" },
    { id: "2", title: "Документ 2", status: "in-progress" },
    { id: "3", title: "Документ 3", status: "under-review" },
  ],
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    moveDocument: (state, action) => {
      const { id, newStatus } = action.payload;
      const doc = state.documents.find(doc => doc.id === id);
      if (doc) doc.status = newStatus;
    },
    addDocument: (state, action) => {
      state.documents.push(action.payload);
    },
    removeDocument: (state, action) => {
      state.documents = state.documents.filter(doc => doc?.id !== action.payload);
    },
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
    reorderDocument: (state, action) => {
      const { sourceIndex, destinationIndex, status } = action.payload;
      const documentsInColumn = state.documents
        .filter(doc => doc.status === status)
        .slice(); // Создаем копию массива.
    
      // Извлекаем документ.
      const [movedDoc] = documentsInColumn.splice(sourceIndex, 1);
    
      // Вставляем его на новое место.
      documentsInColumn.splice(destinationIndex, 0, movedDoc);
    
      // Обновляем порядок в общем списке.
      const newDocuments = state.documents.filter(doc => doc.status !== status);
      state.documents = [
        ...newDocuments,
        ...documentsInColumn.map((doc, index) => ({
          ...doc,
          order: index, // Сохраняем новый порядок для сортировки.
        })),
      ];
    },
  },
});

export const { moveDocument, addDocument, setDocuments, reorderDocument, removeDocument } = documentsSlice.actions;

const store = configureStore({
  reducer: {
    documents: documentsSlice.reducer,
  },
});

export default store;
