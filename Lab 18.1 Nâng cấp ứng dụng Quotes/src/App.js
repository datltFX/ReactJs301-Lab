//do
import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import getData from "./api/getData";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  //luu du lieu
  const [data, setData] = useState([]);
  useEffect(() => {
    getData(
      "https://react-lab-af347-default-rtdb.firebaseio.com/data.json"
    ).then((data) => {
      // console.log(data);
      setData(data);
    });
  }, [data]);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes quotes={data} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={data} />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
