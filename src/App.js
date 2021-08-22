import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Users from "./user/pages/users";
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UserPlaces from './places/pages/userPlaces';
 
const  App = () => {
  return (
    <div>
      <Router>
        <MainNavigation/>
        <main>
          <Switch>
            <Route path="/places/new" component={NewPlace} exact/>
            <Route path="/" component={Users} exact/>
            <Route path="/:userId/places" component={ UserPlaces } />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
    
  );
}

export default App;
