import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addJob, updatedJob } from '../../features/jobs/jobsSlice';

const Form = ({mode}) => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const [title , setTitle] = useState('')
    const [type , setType] = useState('')
    const [salary , setSalary] = useState('')
    const [deadline , setDeadline] = useState('')
    const {editing} = useSelector(state => state.jobs)
  useEffect(() => {
    const {title , type , id , salary , deadline} = editing
    if(id && mode) {
        setTitle(title)
        setType(type)
        setSalary(salary)
        setDeadline(deadline)
    }
   
  },[editing , mode])
   
    
    const hendleAddNewJob = (e) => {
        e.preventDefault()
      dispatch(addJob({
        title,
        salary:Number(salary),
        type,
        deadline,
      }))
      reset()
      navigation('/')
  
    }

   
 
    const hendleEditJob = (e) => {
        e.preventDefault()
        dispatch(updatedJob({
            id: editing.id,
            data:{
                title,
                salary:Number(salary),
                type,
                deadline,
            }
            
        }))
        reset()
        navigation('/')
    }

    const reset = () => {
        setTitle('')
        setType('')
        setSalary('')
        setDeadline('')
    }
    return (
        <form className="space-y-6" onSubmit={ mode ? hendleEditJob : hendleAddNewJob }>
             <div className="fieldContainer">
          <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
          <select value={title} onChange={(e) => setTitle(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required>
            <option value='' hidden selected>Select Job</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Software Developer'>Software Developer</option>
            <option value='Full Stack Developer'>Full Stack Developer</option>
            <option value='MERN Stack Developer'>MERN Stack Developer</option>
            <option value='DevOps Engineer'>DevOps Engineer</option>
            <option value='QA Engineer'>QA Engineer</option>
            <option value='Product Manager'>Product Manager</option>
            <option value='Social Media Manager'>Social Media Manager</option>
            <option value='Senior Executive'>Senior Executive</option>
            <option value='Junior Executive'>Junior Executive</option>
            <option value='Android App Developer'>Android App Developer</option>
            <option value='IOS App Developer'>IOS App Developer</option>
            <option value='Frontend Developer'>Frontend Developer</option>
            <option value='Frontend Engineer'>Frontend Engineer</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobType">Job Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}  id="lws-JobType" name="lwsJobType" required>
            <option value="" hidden selected>Select Job Type</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobSalary">Salary</label>
          <div className="flex border rounded-md shadow-sm border-slate-600">
            <span className="input-tag">BDT</span>
            <input value={salary} onChange={(e) => setSalary(e.target.value)}  type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
              placeholder="20,00,000" />
          </div>
        </div>

        <div className="fieldContainer">
          <label htmlFor="lws-JobDeadline">Deadline</label>
          <input value={deadline} onChange={(e) => setDeadline(e.target.value)}  type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
        </div>

        <div className="text-right">
            
          <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
         {
            mode ? 'Edit Job' : 'Add Job'
         }
          </button>
        </div>
      </form>
    );
};

export default Form;