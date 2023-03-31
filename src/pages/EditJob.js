import React from 'react';
import Form from '../components/Form/Form';

const EditJob = () => {
    return (
    
   
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
        <Form mode={true}/>
        
        
        </div>
      </main>
    </div>
  
    );
};

export default EditJob;