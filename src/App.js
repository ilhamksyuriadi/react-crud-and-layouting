import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserPage from './pages/UserPage';
import FormPage from './pages/FormPage'

import LandingPage from './pages/LandingPage';
import LayoutDashbaord from './layout/LayoutDashbaord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/list" component={() => <LayoutDashbaord children={<UserPage />} />} />
          <Route exact path="/add" component={() => <LayoutDashbaord children={<FormPage />} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
