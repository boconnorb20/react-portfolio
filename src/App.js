import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "./components/AboutMe";
import Interests from "./components/Interests"




function App() {
  return (
    <>
    <Particles 
     className="particles-canvas"
     params={{
      "interactivity": {
        "events": {
          "onHover": {
            "enable": true,
            "mode": "bubble"
          },
          "onClick": {
            "enable": true,
            "mode": "push"
          }
        },
        "modes": {
          "bubble": {
            "opacity": 0.8,
            "size": 10,
            "color": {
              "value": "#e4bb15"
            }
          }
        }
      },
      "particles": {
        "color": {
          "value": "#000"
        },
        "links": {
          "color": {
            "value": "#000"
          },
          "enable": true,
          "opacity": 0.5
        },
        "move": {
          "enable": true
        },
        "opacity": {
          "value": 0.5
        },
        "size": {
          "value": 2
        }
       }
      }
     }
        
    />
    <Navbar />
    <Header />
    <AboutMe />
    <Interests />

    </>

  );
}


export default App;
