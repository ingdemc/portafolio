import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Project from "./pages/Project";

const App  = () => {
  return (
   <>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/project' element={<Project/>}/>
   <Route path='/detail_project' element={<Project/>}/>
   <Route path='*' element={<Notfound/>}/>
   </Routes>
   </>
  );
}

export default App;
