import Header from "./Component/Header";
import React, { useEffect, useState } from "react";
import Table from "./Component/Table";
import interview from "./interviews.json";

import "./App.css";
function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [showArchived, setShowArchived] = useState(true);
  const [filterBy, setFilterBy] = useState("all");
  useEffect(() => {
    setData(interview);
  }, []);
  useEffect(() => {
    if (!searchText) {
      setData(interview);
      return;
    }

    const temp = interview.filter((p) =>
      p.candidate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setData(temp);
  }, [searchText]);
  useEffect(() => {
    if (showArchived) {
      setData(interview);
      return;
    }
    const temp = interview.filter((p) => p.archived == showArchived);
    setData(temp);
  }, [showArchived]);

  useEffect(() => {
    if (filterBy === "all") {
      setData(interview);
      return;
    }
    if (filterBy === "active") {
      const temp = interview.filter((p) => p.archived == false);
      setData(temp);
      return;
    }
    if (filterBy === "archived") {
      const temp = interview.filter((p) => p.archived == true);
      setData(temp);
      return;
    }
  }, [filterBy]);
  return (
    <div className="App">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Table
        data={data}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;
