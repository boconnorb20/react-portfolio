import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import { faBars } from "@fortawesome/free-solid-svg-icons";




function App() {
  return (
    <>
    <Particles 
     params={{
       particles: {
         number: {
           value: 20,
           enable: true,
         },
         shape: {
           type: "circle",
           stroke: {
             width: 3,
             color: "#f9ab00"
           }

         }
       }
     }}    
    />
    <Navbar />
    <Header />

    </>

  );
}

export default App;
