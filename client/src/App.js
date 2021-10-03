import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import Signin from "./Components/Admin/Signin";
import Landing from "./Components/Admin/Landing";
import UpdatePage from "./Components/Admin/UpdatePage";
import AdminRoute from "./Components/Admin/auth/AdminRoute";
import ArtistProfile from './Pages/Artist Profile Page/ArtistProfile.jsx';
import AllArtists from './Pages/All Artists Page/AllArtists.jsx';
import AboutUs from "./Pages/About Us Page/AboutUs";
import TnC from "./Pages/T n C Page/TnC";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/artist/details/:id" exact component={ArtistProfile} />
          <Route path="/artist/all" exact component={AllArtists} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/tnc" exact component={TnC} />
          <Route path="/admin/signin" exact component={Signin} />
          <AdminRoute path="/admin" exact component={Landing} />
          <AdminRoute exact path='/admin/services/:id/update' component={UpdatePage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;