import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/signin"element={<SignIn />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
