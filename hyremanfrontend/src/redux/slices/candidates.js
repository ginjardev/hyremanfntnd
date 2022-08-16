import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allCandidates: [],
  shortlistedCandidates: [],
};

export const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    setCandidates: (state, action) => {
      state.allCandidates = action.payload;
    },

    setShortlistedCandidates: (state, action) => {
      state.shortlistedCandidates = action.payload;
    },

    addToShortlistedCandidates: (state, action) => {
      const alreadyExists = state.shortlistedCandidates.filter((candidate) => {
        return candidate.id === action.payload.id;
      });
      if (alreadyExists.length === 0) {
        state.shortlistedCandidates.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCandidates,
  setShortlistedCandidates,
  addToShortlistedCandidates,
} = candidatesSlice.actions;

export default candidatesSlice.reducer;
