import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 1,
//   jAtt:[],
// };
const initialState = {
  value: 1,
  jAtt:[],
};

export const attractionSlice = createSlice({
  name: "attraction",
  initialState,
  reducers: {
    selectAt: (state, action) => {
      state.jAtt += action.payload;
    },
    setAttractionID: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAttractionID ,selectAt } =
  attractionSlice.actions;

export default attractionSlice.reducer;
