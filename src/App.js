import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { Card } from "@mui/material";
import { list } from "./assets/cards-list";
import { list2 } from "./assets/cards-list";

function App() {
  const [selectedFilter, setselectedFilter] = useState(0);

  return (
    <div className="App">
      <Header />
      <Filter
        selectedFilter={selectedFilter}
        setselectedFilter={setselectedFilter}
      />
      {selectedFilter == 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
