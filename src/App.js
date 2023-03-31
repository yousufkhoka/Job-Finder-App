import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import AddNewJob from './pages/AddNewJob';
import EditJob from './pages/EditJob';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/add-job' element={<AddNewJob/>} />
          <Route path='/edit-job' element={<EditJob/>} />
        </Routes>

    
      </Layout>
   </Router>
  );
};

export default App;