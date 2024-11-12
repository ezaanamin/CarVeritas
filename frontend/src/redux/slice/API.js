import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const SignUpPost = createAsyncThunk(
//     'post/postRequest',
//     async (data, { rejectWithValue }) => {
//       try {
//         const response = await axios.post('http://localhost:4000/users/', data);
  
//         if (response.data.error === 'User Exist') {
//           return rejectWithValue({ error: 'User Exist' });
//         }
  
//         return response.data;
//       } catch (error) {
//         return rejectWithValue(error.response.data);
//       }
//     }
//   );
export const APISlice = createSlice({
    name: 'API',
    initialState: { data: [], error: null, status: 'idle',verfiedStatus:null},
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default APISlice.reducer;
