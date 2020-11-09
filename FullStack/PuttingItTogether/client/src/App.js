import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import AllUsers from './views/AllUsers';
import OneUser from './views/OneUser';
import NewUser from './views/NewUser';
import EditUser from './views/EditUser';

function App() {
  return (
    <div className="container">
      <Router>
        <AllUsers path="/"/>
        <OneUser path="/users/:id"/>
        <NewUser path="/users/new"/>
        <EditUser path="/users/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
