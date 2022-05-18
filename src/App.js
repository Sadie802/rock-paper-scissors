import React from "react";
import { Route, Routes } from "react-router";
import Choose from "./components/Choose";
// import Play from "./components/Play"
function App() {
  return (
    <Routes>
      <Route path='*' element={<Choose />}/>;
      {/* <Route path='/play' element={<Play/>}/>; */}
    </Routes>
  )
}

export default App;
