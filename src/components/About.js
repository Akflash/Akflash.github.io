import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" >
         <div className="row" style={{width:"800px", margin:"0 auto"}}>

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p className="desc">
               {
                 resumeData.aboutme
               }
               <br />
            {resumeData.befquote} <blockquote>{resumeData.quote}</blockquote>
               </p>

               <div className="row">

                  <div className="columns contact-details desc">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                  
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}