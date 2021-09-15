import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import SlickSlider from "./Components/Sliders/Slick Slider/SlickSlider";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/slider" exact component={SlickSlider} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;