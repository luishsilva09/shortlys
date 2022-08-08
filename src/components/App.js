import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js"
import UserContext from "../context/UserContext";
import React from "react";
import Head from "./Head.js";
import Ranking from "./Ranking.js";

function App() {
  const [userData, setUserData] = React.useState();
  return (
    <UserContext.Provider value={{userData,setUserData}}>
    <BrowserRouter>
    <Head></Head>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin"element={<SignIn />}/>
      <Route path="/ranking" element={<Ranking />}/>
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
