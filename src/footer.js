import React from 'react';
import LogoImag from './logo.jpg';

function Footer(){
    return(

        <>
        <div style={{ marginTop:'1000px' , textAlign:'center' ,justifyContent:'center'}}>
        <p style={{}}>Why am i receving this invitation ?</p>
<p> This invitation is automaticaly sent to you , once job oppartunty match public profile to invite you for job hiring procces </p>
      <p> to stop receiving these emails , please <b>Send "unsubsecribe " Email to jobtalents@talentspace.ai</b></p>

<img src={LogoImag} alt="Logo 01" height="50" loading="lazy"   style={{borderRadius:'10px'}} />
</div>
</>

    )
}

export default Footer;