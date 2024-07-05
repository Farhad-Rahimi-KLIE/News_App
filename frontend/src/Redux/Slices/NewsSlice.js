import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    akhbar : [],
    jan : []
}

export const PostNews = createAsyncThunk("News/PostNews", async (payload)=>{
    const result = await axios.post("http://localhost:3000/create", payload,
    {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
     });
    return result.data.addimage;
})

export const GetNews = createAsyncThunk("News/getNews", async ()=>{
    const result = await axios.get("http://localhost:3000/get",
    {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
     });
    return result.data.getAllProperty;
})

export const DeleteNews = createAsyncThunk("News/deletenews", async (payload)=>{
    const result = await axios.delete(`http://localhost:3000/delete/${payload}`,
    {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
     });
    return result.data.getAllProperty;
})

export const GetOneNews = createAsyncThunk("News/getonenews", async (payload)=>{
    const result = await axios.get(`http://localhost:3000/getone/${payload}`,
    {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
     });
    return result.data.getAllProperty;
})

export const UpdateNews = createAsyncThunk("News/updatenews", async (payload)=>{
    const result = await axios.put(`http://localhost:3000/update/${payload}`,
    {
        headers : {
          "Authorization" : `Bearer ${localStorage.getItem("token")}`
        }
     });
    return result.data.getAllProperty;
})

export const NewsSlice = createSlice({
    name : "news",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(GetNews.fulfilled, (state, action)=>{
            state.akhbar = action.payload
        }),
        builder.addCase(GetOneNews.fulfilled, (state, action)=>{
            state.jan = action.payload
        })
    }
})
export default NewsSlice.reducer;