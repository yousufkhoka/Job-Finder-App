import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createJob, deleteJob, editJob, getJob } from "./jobsAPI"

const initialState = {
     jobs : [],
     isLoading : false,
     isError : false,
     error :'',
     editing:{}
}
//  thunk
export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
    const  jobs = await getJob()
    return  jobs;
})

export const addJob = createAsyncThunk('jobs/addJob', async (newJob) => {
    const  job = await createJob(newJob)
    return  job;
})
export const removedJob = createAsyncThunk('jobs/removedJob', async ( id) => {
    const  job = await deleteJob( id)
    return  job;
})
export const updatedJob = createAsyncThunk('jobs/updatedJob', async ( {id , data}) => {
    const  job = await editJob( id , data)
    return  job;
})

const jobsSlice = createSlice({
    name:'jobs',
    initialState,
    reducers:{
        addEditing:(state , action) => { 
            state.editing = action.payload
        },
       removeEditing:(state ) => {
          state.editing = {}
       } 
    },
    extraReducers:(builder) => {
           builder
                 .addCase(fetchJobs.pending , (state) => {
                      state.isLoading = true;
                      state.isError = false;
                      state.error = '';
                 })
                    .addCase(fetchJobs.fulfilled , (state , action) => {
                        state.isLoading = false;
                        state.jobs = action.payload;
                        
                    })
                    .addCase(fetchJobs.rejected , (state , action) => {
                        state.isLoading = false;
                        state.isError = true;
                        state.error = action.error?.message;
                        state.jobs = [];
                        
                })


            .addCase(addJob.pending , (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
               
              
            })
                .addCase(addJob.fulfilled , (state , action) => {
                    state.isLoading = false;
                    state.jobs.push(action.payload) ;
                    
                    })
                    .addCase(addJob.rejected , (state , action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.error = action.error?.message; 
                })

            .addCase(removedJob.pending , (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(removedJob.fulfilled , (state , action) => {
                state.isLoading = false;
                state.jobs  = state.jobs.filter(job => job.id !== action.meta.arg) ;
                
                })
                .addCase(removedJob.rejected , (state , action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message; 
            })


            
            .addCase(updatedJob.pending , (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = '';
            })
            .addCase(updatedJob.fulfilled , (state , action) => {
                state.isLoading = false;
                const indexToUpdate  =  state.jobs.findIndex((job) => job.id === action.payload.id)
                state.jobs[indexToUpdate]  = action.payload ;
                
                })
                .addCase(updatedJob.rejected , (state , action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message; 
            })
    }
})


export default  jobsSlice.reducer
export const {addEditing , removeEditing} = jobsSlice.actions