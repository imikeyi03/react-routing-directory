import React from 'react';
import { 
  BrowserRouter,
  Route,
  Switch
 } from 'react-router-dom';

//  App Components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
  // Wrap the app in a BrowserRouter Tag
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* Place route components here */}
      {/* Exact path tells react to only go to the home route if its exactly the root and not ANYTHING with '/' in the url */}
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" render={ () => <About title="About me"/> } />
        <Route path="/teachers" component={ Teachers } />
        <Route path="/courses" component={ Courses } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;