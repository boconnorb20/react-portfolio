import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faApple } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Interests = () => {
    return (
        <div className="Interests">
            <h1 className="py-5">My Interests</h1>
                <div className="container">
                    <div className="row">
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                              <div className="circle"> <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/></div>
                               <h3>Web Development</h3>
                               <p>Driven interests in Web Dev and all the technolgy and aspects that accompany development.</p>
                           </div>
                       </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                               <h3>Continuing Education</h3>
                               <p>Outside of my Bootcamp I have locked in additional courses to further my knowledge to guide me in the paths chosen.</p>
                           </div>
                       </div>
                        {/*-*/}
                        <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon={faFacebookF} size="2x"/></div>
                               <h3>Networking</h3>
                               <p>Establishing SM Networks and other utilities for the job search.</p>
                           </div>
                       </div>
                         {/*-*/}
                         <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"> <FontAwesomeIcon className="icon" icon={faApple} size="2x"/></div>
                               <h3>Science</h3>
                               <p>Future interests in Computer Science.</p>
                           </div>
                       </div>
                    </div>
                </div>
        </div>
    
    )
}

export default Interests
