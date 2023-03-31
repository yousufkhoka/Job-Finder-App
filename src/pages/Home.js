import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import Job from '../components/Job/Job';
import Loading from '../components/Ui/Loading';
import { fetchJobs } from '../features/jobs/jobsSlice';

const Home = () => {
    const dispatch = useDispatch()
    const {jobs, isLoading , isError , error} = useSelector(state => state.jobs)
    const {sort , search , type} = useSelector(state => state.filter)
  

    useEffect(() => {
        dispatch(fetchJobs())
    } ,[dispatch])

    //  all  filtering functions

    const filterSort = (a ,b) => {
        if(sort === 'lowToHigh'){
             return a.salary - b.salary
        }
        if(sort === 'highToLow'){
            return b.salary - a.salary 
       }
       return a
    }
    const filterSearch = (job) => {
        return  job.title.toLowerCase().includes(search.toLowerCase())
    }
    const filterType = (job) => {
        if(type.toLowerCase() === job.type.toLowerCase() || type === '') {
            return true;
        }
        return false
    }
  
    //  decuid whate to render
  
    let content = null;
    if(isLoading) {
        content = <Loading />
    }
    if( !isLoading && isError)  {
        content = <div className='lws-section-title ' style={{color:'red'}}>{error}</div>
    }
    if( !isLoading && !isError && jobs.length  === 0 )   {
        content = <div className='lws-section-title'>jods no found</div>
    }
    if( !isLoading && !isError && jobs.length > 0 )   {
        content = jobs
        .filter((job) => filterSearch(job))
        .filter((job)=> filterType(job))
        .sort((a, b) => filterSort(a , b))
        .map(job =><Job key={job.id} job={job}/>)
    }


    return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
      
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
              <Header/>
                <div className="jobs-list">   
                {
                    content
                }
                </div>
            </main>
        </div>
    </div>
    );
};

export default Home;