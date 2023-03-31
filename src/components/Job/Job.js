import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEditing, removedJob } from '../../features/jobs/jobsSlice';

const Job = ({job}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {type ,title , salary ,deadline, id} = job || {}
   
    const hendleDelete = (id) => {
        dispatch(removedJob(id))
    }

    const hendleEditing = (editJob) => {
        dispatch(addEditing(editJob))
        navigate('/edit-job')
    }







   let iColor =  '!text-[#FF8A00] '
   if(type === 'Fulltime')  iColor = '!text-[#FF8A00] '
   if(type === 'Internship')  iColor = '!text-[#FF5757] '
   if(type === 'Remote')  iColor = '!text-[#56E5C4] '

    return (
        <div className="lws-single-job">
        <div className="flex-1 min-w-0">
            <h2 className="lws-title">{title}</h2>
            <div className="job-footers">
                <div className="lws-type">
                    <i className={`fa-solid fa-stop ${iColor} text-lg mr-1.5`}></i>
                   {type}
                </div>
                <div className="lws-salary">
                    <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
                   { salary}
                </div>
                <div className="lws-deadline">
                    <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
                    {deadline}
                </div>
            </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
                
                <button onClick={()=>hendleEditing(job)} type="button" className="lws-edit btn btn-primary">
                    <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
                    Edit
                </button>
              
            </span>

            <span className="sm:ml-3">
                <button type="button" className="lws-delete btn btn-danger " onClick={() => hendleDelete(id)}>
                    <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
                    Delete
                </button>
            </span>
        </div>
    </div>
    );
};

export default Job;