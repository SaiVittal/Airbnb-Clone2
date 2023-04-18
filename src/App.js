import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Card } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
