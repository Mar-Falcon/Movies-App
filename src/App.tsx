import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { Admin, Home, MoviesPage, Login, SignUp, SeriesPage } from "./Pages";
import { Users } from "./Pages/Users";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>      
        <Switch>        
          <Route path="/signUp" component={SignUp}/> 
          <Route path="/admin" component={Admin}/> 
          <Route path="/movies" component={MoviesPage}/> 
          <Route path="/series" component={SeriesPage}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/users" component={Users}/> 
          <Route path="/" component={Home}/>          
        </Switch>
      </BrowserRouter>           
    </div>
  );
}

export default App;
