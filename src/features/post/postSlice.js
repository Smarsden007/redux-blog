import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   { id: '1', title: 'Learning Reux Toolkit',content: "I've heard good things"},
   { id: '2', title: 'Learning Reux Toolkit2',content: "I've heard good things2"}
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export default postSlice.reducer