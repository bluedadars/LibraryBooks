import { Route, Routes } from "react-router-dom";
import Bookstock from "./Components/Bookstock";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Bookstock/>}/>
    </Routes>
    // <Bookstock/>
  );
}

export default App;
