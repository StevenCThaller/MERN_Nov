import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PageOne from './views/PageOne';
import PageTwo from './views/PageTwo';
import PageThree from './views/PageThree';
// step 1: import our router
import { Router, Link } from '@reach/router';
import WildCard from './views/WildCard';

function App() {
  const [state, setState] = useState("");
  return (
    <div className="App">
      <div>
        {/* <a href="/">Page One</a> | <a href="/pagetwo">Page Two</a> | <a href="/pagethree">Page Three</a> */}
        <Link to="/">Page One</Link> | <Link to="/pagetwo">Page Two</Link> | <Link to="/pagethree">Page Three</Link>
      </div>
      {/* step 2: Adding the router to our component */}
      <Router>
        {/* step 3: add the components that will be associated with given routes */}
        {/* step 4: apply the urls to each component */}
        <PageOne path="/" state={state} /> 
        <PageTwo path="/pagetwo"/>
        <PageThree path="/pagethree"/>
        <WildCard path="/crazy/:clownnose/:jokers/:nintendo/:bottle/:mouse"/>
      </Router>

    </div>
  );
}

export default App;
