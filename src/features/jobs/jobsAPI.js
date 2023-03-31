import axios from '../../utils/axios'


export const getJob = async () => {
    const respons = await axios.get('/jobs')
    return respons.data
}

export const createJob = async (job) => {
      const respons = await axios.post('/jobs',{
        ...job
      })
      return respons.data
}


export const editJob = async (id , updatedJob) => {
    const respons = await axios.patch(`/jobs/${id}`,{
        ...updatedJob
    })
    return respons.data
}

export const deleteJob = async (id) => {
    const respons = await axios.delete(`/jobs/${id}`)
    return respons.data
}