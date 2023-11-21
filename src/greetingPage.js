
import React, { useState } from 'react';
import './greetingPage.css';

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
      <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <h2>Hello, {candidateName}!</h2>

        {/* Toggle button for dark mode */}
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        </label>
      </div>

      <div className={`Job-content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <form>
          <h3>Are you interested in this job?</h3>
          <p>22H : 30M</p>

          {/* Radio buttons for job status */}
          <div checked={isDarkMode} onChange={toggleDarkMode}>
            <button value="yes" checked={jobStatus === 'yes'} onChange={handleJobStatusChange}>Accept the invitation</button>

            <button value="no" checked={jobStatus === 'no'} onChange={handleJobStatusChange}>Pass it to friend</button>
          </div>

       
    
        </form>
      </div>
    
    </>
 );

 };


export default GreetingPage;
//
//This code has been updated with proper commenting. Comments have been added to explain the purpose of each part of the code. The comments are concise and clear, making it easier for you to understand the code..</s>