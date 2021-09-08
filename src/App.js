import "./App.css";
import { get } from "./utils/api";
import { useEffect, useState } from "react";
import ExpenseChart from "./components/ExpenseChart";

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
        {/* Learn React with api - key9uIaZ1141Jn0fO */}
        <p>Show from Date to Date</p>
        {data && <ExpenseChart data={data} />}
      </header>
    </div>
  );
}

export default App;
