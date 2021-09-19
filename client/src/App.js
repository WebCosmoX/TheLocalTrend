import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import SlickSlider from "./Components/Sliders/Slick Slider/SlickSlider";
import { NotFound } from './NotFound/NotFound';
import Signin from "./Components/Admin/Signin";
import Landing from "./Components/Admin/Landing";
import UpdatePage from "./Components/Admin/UpdatePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/slider" exact component={SlickSlider} />
          <Route path="/admin/signin" exact component={Signin} />
          <Route path="/admin" exact component={Landing} />
          <Route exact path='/admin/services/:id/update' component={UpdatePage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;