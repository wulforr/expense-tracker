import "./App.css";
import { get } from "./utils/api";
import { useEffect, useState } from "react";
import HomePage from "./components/Homepage";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const tempData = await get("Table%201");
      setData(tempData.data.records.map((record) => ({ ...record.fields })));
    }
    getData();
  }, []);
  console.log("data", data);

  return (
    <div className="App">
      <header className="App-header">
        <HomePage data={data} />
        <p>Show from Date to Date</p>
      </header>
    </div>
  );
}

export default App;
