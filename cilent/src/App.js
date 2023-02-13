import "./App.css";
import FilterTurlar from "./ContextApi/FilterTurlar";
import Navbar from "./Page/NavbarElement/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <FilterTurlar>
      <Navbar />
      <Outlet />
    </FilterTurlar>
  );
}

export default App;
