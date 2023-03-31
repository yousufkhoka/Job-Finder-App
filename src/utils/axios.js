import axios from "axios";

const  instance = axios.create({
    baseURL: 'https://lws-job-finder-app.onrender.com',
    
  })
  export default instance;