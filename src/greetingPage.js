
import React, { useState } from 'react';
import './greetingPage.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import Content from './content';
import Button from 'react-bootstrap/Button';
import { AiOutlineClockCircle } from 'react-icons/ai';



// GreetingPage component
function GreetingPage({ candidateName }) {
 // State for dark mode
 const [isDarkMode, setIsDarkMode] = useState(false);
 

 // State for job status
 const [jobStatus, setJobStatus] = useState('');

 


 // Function to handle job status change
 const handleJobStatusChange = (event) => {
    setJobStatus(event.target.value);
 };

 // Function to toggle dark mode
 const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode);
};

 

 // Render the component
 return (
    <>
  
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
      <div className="header-container">
        <h5>Hello, {candidateName}!</h5>
        <div className="toggle-container" onClick={toggleDarkMode}>
          {isDarkMode ? <FaMoon className="moon-icon" /> : <FaSun className="sun-icon" />}
        </div>
       
      </div>

      <div className={`Job-content ${isDarkMode ? 'dark-mode' : 'light-mode'} `}>
        <form>
        <div className="form-row"  style={{ backgroundColor: isDarkMode ? '#fff' : '#002147', color: isDarkMode ? '#000' : '#fff'}}>
      <div className="question">
        <h6>Are you interested in this job?</h6>
      </div>
          <div className="time">
          <b><p >    <AiOutlineClockCircle style={{ marginRight: '5px' }} />
      22H : 30M</p></b> 
      </div>

          {/* Radio buttons for job status */}
          <div className="buttons">
           
            <Button variant="primary" size="sm" style={{   backgroundColor:'#1919e6'}}  onChange={handleJobStatusChange}>
            Accept the invitation
        </Button>{' '}
        
        <Button variant="secondary" size="sm" onClick={handleJobStatusChange}>
        Pass it to friend
        </Button>

        
          </div>

          </div>
    
        </form>
  <div className='Content'>
        <Content isDarkMode={isDarkMode} jobStatus={jobStatus} onJobStatusChange={handleJobStatusChange} />
        </div>
     
        </div>
        </div>

    </>
 );

 };


export default GreetingPage;
