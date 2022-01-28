import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Users from "./Pages/Users";
import Home from "./Pages/Home";
import MoviesPage from "./Pages/MoviesPage";
import SeriesPage from "./Pages/SeriesPage";
import { AuthProvider } from "./context/Auth";
import Detail from "./Pages/Detail";

const App = () => {
  return (
    <AuthProvider>
    <div className="App">
      <BrowserRouter>      
        <Switch>        
          <Route path="/signup" component={SignUp}/> 
          <Route path="/admin" component={Admin}/> 
          <Route path="/detail/:id" component={Detail}/>
          <Route path="/movies" component={MoviesPage}/> 
          <Route path="/series" component={SeriesPage}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/users" component={Users}/> 
          <Route path="/" component={Home}/>          
        </Switch>
      </BrowserRouter>           
    </div>
    </AuthProvider>    
  );
}

export default App;
