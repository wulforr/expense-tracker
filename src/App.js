import "./App.css";
import { get } from "./utils/api";
import { useEffect, useState } from "react";
import HomePage from "./components/Homepage";
import { Spinner } from "react-rainbow-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryView from "./components/CategoryView";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      const tempData = await get("Table%201");
      setData(
        tempData.data.records.map((record) => ({
          ...record.fields,
          id: record.id,
        }))
      );
    } catch (err) {
      console.error(err);
      setError("There was an error retrieving the data. Please try again!!!!");
    }
  };

  useEffect(() => {
    async function getDataInUseEffect() {
      setIsLoading(true);
      await getData();
      setIsLoading(false);
    }
    getDataInUseEffect();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/category/:category">
              <CategoryView data={data} getData={getData} />
            </Route>
            <Route path="/">
              <HomePage data={data} getData={getData} />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
