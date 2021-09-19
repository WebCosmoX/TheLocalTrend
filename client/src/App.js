import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArtistProfile from './Pages/Artist Profile Page/ArtistProfile.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/artist" exact component={ArtistProfile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;