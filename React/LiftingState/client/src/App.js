import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const [userSubmissions, setUserSubmissions] = useState([]);

  const changeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const submitHandler = e => {
      e.preventDefault();
      // console.log("This is being printed from the app.js, not the form.js")
      // console.log(`Name: ${user.name}\nEmail: ${user.email}`);

      // todo
      // 1. take the user from the form and add it to the list of user submissions
      // console.log([...userSubmissions,user])
      setUserSubmissions([...userSubmissions, user]); // this will add the user from the form to the end of the userSubmissions array in state
      // 2. clear the form
      setUser({
        name: '',
        email: ''
      });
  }


  return (
    <div className="container">
      <h1>Sign up for my endless notifications that never end</h1>
      <ul>
        {
          userSubmissions.map((item,i)=><li key={i}><UserInfo name={item.name} email={item.email} /></li>)
        }
      </ul>
      <h2>Form Thing!</h2>
      <Form 
        user={ user } // passing data through as props is nothing new
        submitHandler={ submitHandler } // but we can actually pass entire functions through as props as well
        changeHandler={ changeHandler }
      />
    </div>
  );
}

export default App;
