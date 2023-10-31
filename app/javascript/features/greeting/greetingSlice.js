import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
const api = 'http://localhost:3000/api/v1/greetings';


const initialState = {
  greeting: [],
  isloading: false,
  error: '',
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async (thunkAPI) => {
    try {
      const response = await axios.get(api);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  });


const greetingSlice = createSlice({
    name: "greeting",
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder.addCase(fetchGreeting.pending, (state) => ({
          ...state, isloading: true,
        }));
        builder.addCase(fetchGreeting.fulfilled, (state, action) => ({
          ...state,isloading: false,
          greeting: action.payload,
        }));
    
        builder.addCase(fetchGreeting.rejected, (state, action) => ({
          ...state,
          isloading: false,
          greeting: [],
          error: action.error.message,
        }));
      },
});
export default greetingSlice.reducer;
