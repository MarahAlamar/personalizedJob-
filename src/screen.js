import React from 'react';
import { useState } from 'react';
import './greetingPage.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Screening from './screening';


function Closed(){

 
 const [isDarkMode, setIsDarkMode] = useState(false);
 

 // State for job status
 const [jobStatus, setJobStatus] = useState('');

 


 // Function to handle job status change
 const handleJobStatusChange = (event) => {
    setJobStatus(event.target.value);
 }

 // Function to toggle dark mode
 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
}

 
 return (
    <>
  
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
 
> 
      <div className="header-container">
     
  <h5 style={{ fontWeight: 'bold', marginRight: '-50%' }}>Hello , Marah!</h5>
  


        
        <div className="toggle-container" onClick={toggleDarkMode}>
          {isDarkMode ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
        </div>
       
      </div>

      <div className={`Job-content ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
        
  <div className='Content'>
        <Screening isDarkMode={isDarkMode} jobStatus={jobStatus} onJobStatusChange={handleJobStatusChange} />
        </div>
     
        </div>
        </div>

    </>
 );

 }


export default Closed;