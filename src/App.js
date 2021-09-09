import "./App.css";
import { get } from "./utils/api";
import { useEffect, useState } from "react";
import HomePage from "./components/Homepage";
import { Spinner } from "react-rainbow-components";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const tempData = await get("Table%201");
        setData(tempData.data.records.map((record) => ({ ...record.fields })));
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.error(err);
        setError(
          "There was an error retrieving the data. Please try again!!!!"
        );
      }
    }
    getData();
  }, []);
  console.log("data", data);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <HomePage data={data} />
      </header>
    </div>
  );
}

export default App;
