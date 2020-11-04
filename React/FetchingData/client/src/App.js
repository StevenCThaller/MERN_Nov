import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ditto, setDitto] = useState({});
  const [dataFetched, setDataFetched] = useState(false);

  //todo: write a function that will run when we FIRST get to this page
  // useEffect(() => {
  //   "this function will run"
  // }, ["when something in here is updated"])

  useEffect(() => {
    // api call to retrieve ditto
    fetchData();
  }, [])




  const fetchData = async e => {
    // VERSION 1: USING fetch (only for get requests)
    // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    //   // take the response and do something with it (in this case convert it into an easily readable json object)
    //   .then(httpResponse => httpResponse.json())
    //   // take the json response, and console log it so we can see what it is
    //   .then(jsonResponse => {
    //     console.log("data received and decoded");

    //     setDitto({
    //       name: jsonResponse.name,
    //       hp: jsonResponse.stats[0].base_stat,
    //       attack: jsonResponse.stats[1].base_stat,
    //       defense: jsonResponse.stats[2].base_stat,
    //       sp_atk: jsonResponse.stats[3].base_stat,
    //       sp_def: jsonResponse.stats[4].base_stat,
    //       speed: jsonResponse.stats[5].base_stat
    //     });
    //     setDataFetched(true);
    //   })
    //   .catch(err => console.log(err));
      // 400 -> bad request (for the most part, your server is not running)
      // 404 -> page not found
      // 500 -> internal server error
      // 401 -> unauthorized

    // VERSION 2: USING axios
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto") // send a GET request to the url
      .then(response => { // then, when the response comes back
        
        let jsonResponse = response.data; //pull the json data from the response
        setDitto({ // use it to set an object in state
          name: jsonResponse.name,
          hp: jsonResponse.stats[0].base_stat,
          attack: jsonResponse.stats[1].base_stat,
          defense: jsonResponse.stats[2].base_stat,
          sp_atk: jsonResponse.stats[3].base_stat,
          sp_def: jsonResponse.stats[4].base_stat,
          speed: jsonResponse.stats[5].base_stat
        });
        setDataFetched(true); // toggle our boolean to true to render things
      })
      .catch(err => console.log(err)); // or, if an error is returned, catch it and do something with it

      
    // VERSION 3: USING axios but no promises
    // try {

    //   let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    //   let jsonResponse = response.data; //pull the json data from the response
    //   setDitto({ // use it to set an object in state
    //     name: jsonResponse.name,
    //     hp: jsonResponse.stats[0].base_stat,
    //     attack: jsonResponse.stats[1].base_stat,
    //     defense: jsonResponse.stats[2].base_stat,
    //     sp_atk: jsonResponse.stats[3].base_stat,
    //     sp_def: jsonResponse.stats[4].base_stat,
    //     speed: jsonResponse.stats[5].base_stat
    //   });
    //   setDataFetched(true); // toggle our boolean to true to render things
    // } catch(err) {
    //   console.log(err);
    // }
  }

  return (
    <div>
      {/* <button onClick={ fetchData }>Get Ditto</button> */}
      {
        dataFetched ? // if datafetched == true
        // display the information
        <ul>  
          <li>Name: { ditto.name }</li>
          <li>HP: { ditto.hp }</li>
          <li>Atk: { ditto.attack }</li>
          <li>Def: { ditto.defense }</li>
          <li>Sp. Atk: { ditto.sp_atk }</li>
          <li>Sp. Def: { ditto.sp_def }</li>
          <li>Speed: { ditto.speed }</li>
        </ul>
        : // else
        // display nothing
        '' 
      }
    </div>
  );
}

export default App;
