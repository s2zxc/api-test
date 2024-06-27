import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./Routerrs/HomePage";
import Trailer from "./Routerrs/Trailer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<HomePage/>}></Route>
        {/* <Route path={`${process.env.PUBLIC_URL}/Trailer/:id`} element={<Trailer/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
