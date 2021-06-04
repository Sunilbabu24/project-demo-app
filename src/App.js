import logo from "./logo.svg";
import "./App.css";

import { EmployeeUpsert } from "./components/EmployeeUpsert";
import { EmployeeList } from "./components/EmployeeList";
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
            <Route path="/create-employee">
              <EmployeeUpsert />
            </Route>
            <Route path="/list-employee">
              <EmployeeList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
