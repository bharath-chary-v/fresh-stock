import React from "react";
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import './index.css';
import Main from "./Views";



const App = () => {
  return (
  
          
            
            <Routes>
              
             <Route path='/' element={<Main />}></Route>

             
            </Routes>
          
  )
}

export default App