import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  page: 1,
  loading: false,
  error: null
};

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    fetchImagesRequest: (state) => {
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
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    }
  }
});

export const {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
  nextPage,
  prevPage
} = imageSlice.actions

export default imageSlice.reducer;