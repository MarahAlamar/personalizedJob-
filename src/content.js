import React from 'react';
import Card from 'react-bootstrap/Card';
import { MdAddCircle} from 'react-icons/md';
import LogoImag from './logo.jpg';
import { MdRemoveCircle } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';





function Content({ isDarkMode, jobStatus, onJobStatusChange }) {
  return (
 
   
<div style={{display:'flex', justifyContent:'center' ,alignItems:'center'}}>
<Card  style={{ width: '45rem' ,  backgroundColor: isDarkMode ? '#002147' : '#fff', color: isDarkMode ? '#fff' : '#000'}}>
        <Card.Header style={{ backgroundColor: isDarkMode ? '#1919e6' : '#1919e6', color: isDarkMode ? '#fff' : '#fff' , textAlign:'center' }}><b>Job Invitation</b>  <AiOutlineQuestionCircle /></Card.Header>
        <Card.Body>
          <Card.Title > 
<div  style={{ display: 'flex', alignItems: 'center' }}>
          <img src={LogoImag} alt="Logo 01" height="80" loading="lazy"   style={{borderRadius:'10px'}} />
          <div style={{ marginLeft: '10px' }}>
            <h4 >Lead Product Design</h4>

<h6 style={{fontSize:'13px'}}>Adobe XD. JIRA. Figma. Leadership-UX/CX-Prototyping</h6>
<p style={{fontSize:'12px'}}>Full Time(Hybrid). Amman, Jordan. Telecom industy</p> 
</div>
</div>
</Card.Title>

         <Card.Text style={{textSizeAdjust:'auto' , justifyContent:'space-between'}}>
        <p style={{fontSize:'14px'}}> Your job as a UX Designer is to give a world class experience for tiket.com users.
           You have main responsibilities to conduct the user and/or evaluation research, 
           do a lot of sketching, and creste wireframes that have high usability.</p>  
         
          </Card.Text>
          <div>
            
          <p style={{fontSize:'14px'}}>  <MdRemoveCircle />  <b>What is ypur job? </b></p>
            <ul style={{fontSize:'12px'}}>
          <li> Provide clear user those and wirehame</li> 
 
          <li>Build prototype and do usability testing to solve user Problem.</li> 
  
          <li>Follow design  system guidelines</li> 
  
          <li> Explore best practice approach to execute comprehensive documentation </li> 
          <li>Mentur and coach pesor team member to ensure the best design implementation</li> 
          <li>Being a comauttant for other LUX Designers in at least 3 tribes</li> 
            </ul>
          </div>
          <div>
       
           <p style={{fontSize:'14px'}}>  <MdAddCircle/> <b>Requirement </b></p>

           <ul style={{fontSize:'12px'}}>
              <li><b>Education:</b> busness or equivalent, e-commerce, business engmeering.</li>
              <li><b>Experiences:</b> pracy and ad tech technology, working in a startup, enterprise service developmere.</li>
  <li><b>Personality: </b>practice approach to execute comspretensive documentation.</li>
  <li><b>Culture:</b> Mentor and coach junior team member to ensure the best design implementation</li>
  <li><b>Extra: </b>Deing a consultant for other UX Designers in at least 3 tribes.</li>
            </ul>
          </div>
          <div>
          <p style={{fontSize:'14px'}}>  <MdAddCircle/> <b>The Benefits </b></p>

            <ul style={{fontSize:'12px'}}>
              <li><b>Education:</b> busness or equivalent, e-commerce, business engmeering.</li>
              <li><b>Experiences:</b> pracy and ad tech technology, working in a startup, enterprise service developmere.</li>
  <li><b>Personality: </b>practice approach to execute comspretensive documentation.</li>
  <li><b>Culture:</b> Mentor and coach junior team member to ensure the best design implementation</li>
  <li><b>Extra: </b>Deing a consultant for other UX Designers in at least 3 tribes.</li>
            </ul>
          </div>

        </Card.Body>
      </Card>
   </div>

  );
}

export default Content;
