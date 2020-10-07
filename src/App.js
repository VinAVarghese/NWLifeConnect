import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ConnectForm from "./pages/Form/form";
// import NoMatch from "./pages/NoMatch/noMatch";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <ConnectForm />
          </Route>
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
