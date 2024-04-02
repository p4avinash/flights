import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: "app",
  initialState: {
    allFlightsData: [],
    singleFlightData: {},
    isLoading: false,
    errorMessage: null,
  },
  reducers: {
    addAllFlightsDataToStore: (state, action) => {
      state.allFlightsData = action.payload
    },

    addSingleFlightDataToStore: (state, action) => {
      state.singleFlightData = action.payload
    },

    setIsLoadingFalse: (state, action) => {
      state.isLoading = false
    },

    setIsLoadingTrue: (state, action) => {
      state.isLoading = true
    },

    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload
    },
  },
})

export const {
  addAllFlightsDataToStore,
  addSingleFlightDataToStore,
  setIsLoadingFalse,
  setIsLoadingTrue,
  setErrorMessage,
} = appSlice.actions
export default appSlice.reducer
