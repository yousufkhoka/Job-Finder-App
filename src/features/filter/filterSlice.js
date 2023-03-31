import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    sort:'',
    search:'',
    type:''
}


const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        changeSort: (state, action) => {
            state.sort = action.payload
        },
        changeSearch: (state, action) => {
            state.search = action.payload
        },
        changeType: (state, action) => {
            state.type = action.payload
        }
    }
})

export default filterSlice.reducer
export const {changeType ,changeSearch , changeSort} = filterSlice.actions