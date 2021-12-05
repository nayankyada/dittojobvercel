import Header from "./Component/Header";
import React, { useEffect, useState } from "react";
import Table from "./Component/Table";
import interview from "./interviews.json";

import "./App.css";
function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(interview);
  const [parentData, setParentData] = useState(interview);
  const [showArchived, setShowArchived] = useState(true);
  const [filterBy, setFilterBy] = useState("all");
  useEffect(() => {
    setData(interview);
    setParentData(interview)
  }, []);
  useEffect(() => {
    if (!searchText) {
      setData(interview);
      setParentData(interview);
      return;
    }

    const temp = interview.filter((p) =>
      p.candidate.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    setData(temp);
    setParentData(temp);
  }, [searchText]);
  useEffect(() => {
    if (showArchived) {
      setData(parentData);
      return;
    }
    const temp = parentData.filter((p) => p.archived === showArchived);
    setData(temp);
  }, [showArchived,parentData]);

  useEffect(() => {
    if (filterBy === "all") {
      setData(parentData);
      return;
    }
    if (filterBy === "active") {
      const temp = parentData.filter((p) => p.archived === false);
      setData(temp);
      return;
    }
    if (filterBy === "archived") {
      const temp = parentData.filter((p) => p.archived === true);
      setData(temp);
      return;
    }
  }, [filterBy,parentData]);
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
