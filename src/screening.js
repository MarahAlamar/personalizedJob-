import Card from 'react-bootstrap/Card';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import './screening.css'
import VideoCard from './video.mp4'

function Screening(isDarkMode){
   
    return(
        <>

        
<div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
<Card  style={{ width: '45rem' ,  backgroundColor: isDarkMode ? '#fff' : '#002147', color: isDarkMode ? '#fff' : '#000'}}>
        <Card.Header style={{ backgroundColor: isDarkMode ? '#002147' : '#fff', color: isDarkMode ? '#fff' : '#fff' , textAlign:'center' }}>  <FaArrowLeft  /><b style={{marginRight:'69%'}}>Screening Interview</b>  </Card.Header>
        <Card.Body>
            <Card.Text>
       <div className="video-screening">
      <video
        autoPlay
        muted
        loop
        width="100%"
        height="100%"
      >
        <source src={VideoCard} type="video/mp4" />
      </video>
       <Button   className="button" required href="/" variant="primary" size="sm" style={{ 
        borderRadius: '13px',
        height: '50px',
        backgroundColor: '#1919e6',
        
        fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif',
        fontSize: '16px',
        fontWeight: '5000',
        lineHeight: '1.5',
marginLeft:'150px'    ,     
marginTop:'200px'  ,
           }} >
Let's go       </Button>
    </div>

   
         <Card.Text >
   
      {/* Submit Button */}
     
</Card.Text>
          </Card.Text>
          
          
          

        </Card.Body>
      </Card>
    
   </div>
   
   
        </>
    )
}

export default Screening;
