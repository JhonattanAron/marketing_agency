import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fecthBeneficios = createAsyncThunk(
  "cursos/beneficios/fetchCursos",
  async () => {
    try {
      const response = await fetch(
        "https://api.adaptleap.com/cursos/beneficios"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

const beneficiosCursosSlice = createSlice({
  name: "beneficios_cursos",
  initialState: {
    beneficios_cursos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fecthBeneficios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fecthBeneficios.fulfilled, (state, action) => {
        state.loading = false;
        state.beneficios_cursos = action.payload;
        state.error = null;
      })
      .addCase(fecthBeneficios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default beneficiosCursosSlice.reducer;
