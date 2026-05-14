import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  allPastes: JSON.parse(localStorage.getItem("pastes")) || [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = {
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
        language: action.payload.language || "plaintext", // added: language field
        createdAt: new Date().toDateString(),
      };
      state.allPastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.allPastes));
    },

    removePaste: (state, action) => {
      state.allPastes = state.allPastes.filter((p) => p.id !== action.payload);
      localStorage.setItem("pastes", JSON.stringify(state.allPastes));
    },

    updatePaste: (state, action) => {
      const paste = state.allPastes.find((p) => p.id === action.payload.id);
      if (paste) {
        paste.title = action.payload.title;
        paste.content = action.payload.content;
        paste.language = action.payload.language; // added: save language on update
        localStorage.setItem("pastes", JSON.stringify(state.allPastes));
      }
    },

    resetPaste: (state) => {
      state.allPastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

export const { addPaste, removePaste, updatePaste, resetPaste } =
  pasteSlice.actions;
export default pasteSlice.reducer;
