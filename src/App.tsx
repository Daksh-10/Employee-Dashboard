import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing";
import Information from "./screens/Information";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing setInfo={setInfo} />} />
          <Route path="/info" element={<Information info={info} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
