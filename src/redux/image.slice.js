import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  pageXOffset: 100,
  loading: false,
  error: null
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    fetchImagesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchImagesSuccess: (state, action) => {
      state.loading = false;
      state.images = action.payload;
    },
    fetchImagesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    pageXOffset: (state, action) => {
      state.pageXOffset = action.payload;
    }
  }
});

export const { 
  fetchImagesStart, 
  fetchImagesSuccess, 
  fetchImagesFailure 
} = imageSlice.actions;

export default imageSlice.reducer;