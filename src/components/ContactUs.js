import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head" style={{width:"800px", margin:"0 auto"}}>
            <div className="ten columns">
              <h1 style={{width:"800px", margin:"0 auto"}}>
              <a className="resume-link " target="_blank" href="https://drive.google.com/file/d/1lZWgenJK0esEfKb4GlBSXYRmZ1ecvIGb/view?usp=sharing">Resume</a>
              <span>.</span>
              <a href="mailto:akshaysrinivasan97@gmail.com">akshaysrinivasan97@gmail.com</a>
             
              </h1>
             
             
            </div>
          </div>
          <footer>
      <div className="row" style={{width:"800px", margin:"0 auto"}}>
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          
        </div>
        
      </div>
    
   
        </footer>
        </section>
        );
  }
}