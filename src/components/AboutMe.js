import React from 'react'
import author from '../Me.JPG'

const AboutMe = () => {
    return (
        <div className="container-py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5"> 
                       <img className="profile-img" src={author} alt="author..."/> 
                    </div> 
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>
                        Hello!! 
                        I am Brian O'Connor. My family and I have made this leap into Programming and Web Development recently.
                        My focus is not only building awesome things on the web but to try and build a brighter future for myself and my family. 
                        
                        My beautiful wife and I call Fort Worth TX home and we have two amazing daughters.
                        I do have a lot of experience in many areas and I anticipate that my hard work and dedications will pay off throughout this adventure. 

                        The areas of Technology I have been learning span from HTML, Java Script, MySQL, Express, NodeJs, MongoDB and ReactJS.
                        I am a very self motivated person and will continue to drive forward and make all of these efforts come to fruition.  
                    </p>
                </div>
            </div>
         </div>
            
        
    )
}

export default AboutMe;
