import logo from "./logo.svg";
import "./App.css";

import { LeaveUpsert } from "./components/LeaveUpsert";
import { LeaveList } from "./components/LeaveList";
import { AppNavBar } from "./common/AppNavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <div>
        <h1>Project Demo</h1>
        <Router>
          <AppNavBar />
          <Switch>
            <Route path="/apply-leave">
              <LeaveUpsert />
            </Route>
            <Route path="/list-leave">
              <LeaveList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
