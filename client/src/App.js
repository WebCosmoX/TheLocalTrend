import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;