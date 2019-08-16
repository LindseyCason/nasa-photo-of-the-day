import React from "react";
import "./App.scss";
import NasaParent from "./components/NasaParent.js"
import Nav from "./components/Nav.js"

function App() {
         
        return (

          <div className="App">
          <Nav />
              <NasaParent />
              
             </div>
          
       
        );
      
    }//close App
export default App;