import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Teen from "./page/Teen";

function App(){
  return(
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/teen" element={<Teen/>}/>

    </Routes>
    
    
    
  )
}

export default App;