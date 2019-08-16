import React from "react";
import "./App.scss";
import NasaParent from "./components/NasaParent.js"
import Nav from "./components/Nav.js"

function App() {
         
        return (

          <div className="App">
              <Nav />
              <NasaParent />
              {/* //Both of these components have to be inside a main div or container */}
             </div>
          
       
        );
      
    }//close App
export default App;