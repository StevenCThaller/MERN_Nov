import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import { useState } from 'react';

function App() {
  const [tabs, setTabs] = useState([
    {
      title: "Tab 1",
      content: "This is the content of tab 1",
      callback: () => alert("Hello!")
    },
    {
      title: "Tab 2",
      content: "This is the content of tab 2"
    },
    {
      title: "Tab 3",
      content: "This is the content of tab 3",
      callback: () => console.log("Sup, loser!")
    }
  ])
  return (
    <div className="container">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
