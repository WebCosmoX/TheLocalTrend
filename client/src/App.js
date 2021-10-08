import HomePage from "./Pages/Home Page/HomePage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import Signin from "./Components/Admin/Signin";
import Landing from "./Components/Admin/Landing";
import AdminRoute from "./Components/Admin/auth/AdminRoute";
import ArtistProfile from './Pages/Artist Profile Page/ArtistProfile.jsx';
import AllArtists from './Pages/All Artists Page/AllArtists.jsx';
import Services from "./Components/Admin/Services";
import Artists from "./Components/Admin/Artists";
import UpdateService from "./Components/Admin/UpdateService";
import UpdateArtist from "./Components/Admin/UpdateArtist";
import CreateService from "./Components/Admin/CreateService";
import CreateArtist from "./Components/Admin/CreateArtist";
import UploadServiceImage from "./Components/Admin/UploadServiceImage";
import UploadArtistImage from "./Components/Admin/UploadArtistImage";
import AboutUs from "./Pages/About Us Page/AboutUs";
import TnC from "./Pages/T n C Page/TnC";
import AddSong from "./Components/Admin/AddSong";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/artist/details/:id" exact component={ArtistProfile} />
          <Route path="/artist/all" exact component={AllArtists} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/tnc" exact component={TnC} />
          <Route path="/admin/signin" exact component={Signin} />
          <AdminRoute path="/admin" exact component={Landing} />
          <AdminRoute path="/admin/services" exact component={Services} />
          <AdminRoute path="/admin/artists" exact component={Artists} />
          <AdminRoute path="/admin/services/add-service" exact component={CreateService} />
          <AdminRoute path="/admin/artists/add-artist" exact component={CreateArtist} />
          <AdminRoute exact path='/admin/services/:id/update' component={UpdateService} />
          <AdminRoute exact path='/admin/services/:id/upload-image' component={UploadServiceImage} />
          <AdminRoute exact path='/admin/artists/:id/upload-image' component={UploadArtistImage} />
          <AdminRoute exact path='/admin/artists/:id/add-song' component={AddSong} />
          <AdminRoute exact path='/admin/artists/:id/update' component={UpdateArtist} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;