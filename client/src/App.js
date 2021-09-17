import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from "./Components/Admin/Signin";
import { NotFound } from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/admin' component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
