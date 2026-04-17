import Profile from "./Profile";
import Course from "./Course";
import Assignment from "./Assignment";
import Home from "./Home";
import Navbar from "./Navbar"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/Profile' element= {<Profile />}> </Route>
          <Route path='/Assignment' element= {<Assignment />}> </Route>
          <Route path='/Course' element= {<Course />}> </Route>
          <Route path='/Home' element= {<Home />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App