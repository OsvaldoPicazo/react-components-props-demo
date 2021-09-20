import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/Badge'
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName = "Flavian" />
      <hr />
      <Greeting firstName = "Cooper" />
      <hr />
      <Greeting firstName = "Moni" />
      <hr />

      <StudentList>
        <StudentCard name="Ana" week="7" info={{city: "Amst", course: "RMT"}} />
        <StudentCard name="Jesse" week="8" info={{city: "Amst", course: "RMT"}} />
      </StudentList> 
      <br /> 
      <Badge badgeText="important" />
      <hr />
      <ReactPlayer url='https://www.youtube.com/watch?v=w7ejDZ8SWv8' />
      
      <ReactPlayer url="https://www.youtube.com/watch?v=Ke90Tje7VS0" playing controls volume="0.5" />

    </div>
  );
}

export default App;
