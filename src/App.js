import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import PrivateRoute from './Components/SignIn/PrivateRoute';
import Header from './Components/Shared/Header/Header';
import AddDestination from './Components/AddDestination/AddDestination';
import DestinationDetails from './Components/DestinationDetails/DestinationDetails';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import MyOrders from './Components/MyOrders/MyOrders';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import Footer from './Components/Shared/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AllDestinations from './Components/AllDestinations/AllDestinations';


function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
        {/* Header */}
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/sign-in">
            <SignIn></SignIn>
          </Route>

          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>

          <Route path="/add-destination">
            <AddDestination></AddDestination>
          </Route>

          <Route path="/destinations/:id">
            <DestinationDetails></DestinationDetails>
          </Route>

          <Route path="/destinations">
            <AllDestinations></AllDestinations>
          </Route>

          <PrivateRoute path="/place-order/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>

          <PrivateRoute path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/manage-orders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        {/* Footer */}
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
