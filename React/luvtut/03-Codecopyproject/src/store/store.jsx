import { createSlice, configureStore } from '@reduxjs/toolkit'

let pastelist = [
    {}
]

const pasteSlice = createSlice({
  name: 'paste',
  initialState: {
  },
  reducers: {
    
  }
})

export const { } = pasteSlice.actions

const store = configureStore({
  reducer: pasteSlice.reducer
})
