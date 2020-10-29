import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import DynamicSection from './components/DynamicSection';
import SectionWithList from './components/SectionWithList';

function App() {
  let section1Header = "Section 1";
  let section2Header = "Section 2";
  let section3Header = "Section 3";

  // let myName = "Cody";

  let section1Text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur modi nulla autem delectus. Porro possimus, sed a ipsum dignissimos unde voluptates laborum, deserunt nostrum et quidem, repellat explicabo sapiente quasi?";
  let section2Text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, quo. Reiciendis ab culpa voluptates veritatis est incidunt odit expedita distinctio repudiandae aliquid ex sequi, laboriosam optio magnam illo amet sapiente.";
  let section3Text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde amet nisi perferendis aut maiores natus commodi voluptatibus, fuga officiis quasi nostrum neque dicta! Laudantium unde nobis dignissimos quisquam exercitationem.";

  let section3List = ["thing 1", "thing 2", "thing 3"];

  return (
    <div className="App">
      <NavBar/>
      <DynamicSection header={section1Header} text={section1Text}/>
      <DynamicSection header={section2Header} text={section2Text}/>
      <SectionWithList header={section3Header} text={section3Text} list={section3List} />

      {/* <DynamicSection header={section3Header} text={section3Text}/> */}
      {/* <DynamicSection header={`My Name is ${myName}`} text={34}/> */}
    </div>
  );
}

export default App;
