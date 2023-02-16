import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const teacherSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    setTeachers: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export default teacherSlice.reducer;
export const { setTeachers } = teacherSlice.actions;
