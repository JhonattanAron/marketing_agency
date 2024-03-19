// src/app/cursosSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCursos = createAsyncThunk("cursos/fetchCursos", async () => {
  try {
    const response = await fetch("https://api.adaptleap.com/cursos");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const cursosSlice = createSlice({
  name: "cursos",
  initialState: {
    cursos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCursos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCursos.fulfilled, (state, action) => {
        state.loading = false;
        state.cursos = action.payload;
        state.error = null;
      })
      .addCase(fetchCursos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cursosSlice.reducer;
