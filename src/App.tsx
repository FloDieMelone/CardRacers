
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
//import Game from "./components/Game";
//import Garage from "./components/Garage";
//import Statistics from "./components/Statistics";
import Settings from "./components/Settings";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
            <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;