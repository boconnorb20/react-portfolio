import React from 'react'
import FoodBeer from "../Images/food-beer.jpeg";
import Notes from "../Images/Note-taker.jpeg";
import Regex from "../Images/regex.jpeg";
import Weather from "../Images/weather.jpeg";
// import {PopupboxManager, PopupBoxContainer} from "react-popupbox";

const Portfolio = () => {

    // for later development

// const openPopupBoxFoodBeer = () => {
//     const content = (
//     <>
//     <img src={FoodBeer} alt="Project1"/>
//     <p>Food For Your Brews</p>
//     <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/boconnorb20/FoodforyourBrews")}>
//         https://github.com/boconnorb20/FoodforyourBrews</a>
//     </>
//     )
//     PopupboxManager.open({content})
// }

// const popupBoxConfigFoodBeer ={
    
// }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1> 
                <div className="image-box-wrapper row justify-content-center">
                    {/* <div className="portfolio-image-box" onClick={openPopupBoxFoodBeer}> */}
                       <img className="portfolio-image" src={FoodBeer} alt="Project1" />
                       <div className="overflow">    
                       </div>
                    {/* </div> */}
                     {/* - */} 
                    <div className="portfolio-image-box">
                       <img className="portfolio-image" src={Notes} alt="Note-Taker-App..." />
                       <div className="overflow">    
                       </div>
                    </div>
                     {/* - */}
                    <div className="portfolio-image-box">
                       <img className="portfolio-image" src={Regex} alt="Regex-Tutorial-Gist..." />
                       <div className="overflow">    
                       </div>
                    </div>
                     {/* - */}
                    <div className="portfolio-image-box">
                       <img className="portfolio-image" src={Weather} alt="Weather-App..." />
                       <div className="overflow">    
                       </div>
                    </div>
                     {/* - */} 
                </div>
            </div>
            
      </div>
    )
}

export default Portfolio;
