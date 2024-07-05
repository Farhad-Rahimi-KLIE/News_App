import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const UserRegister = createAsyncThunk("Blog/UserRegister", async (payload)=>{
    const result = await axios.post("http://localhost:3000/register", payload);
    localStorage.setItem('users', JSON.stringify(result))
    return result.data.user;
})

export const UserLogin = createAsyncThunk("Blog/UserLogin", async (payload)=>{
    const result = await axios.post("http://localhost:3000/login", payload);
    localStorage.setItem('token', result.data.token)
      localStorage.setItem('name', result.data.name)
    return result.data;
})

export const AuthentecationSlice = createSlice({
    name : "authentecation",
    initialState : 0,
})
export default AuthentecationSlice.reducer;