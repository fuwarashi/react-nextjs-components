import './App.css';
import Card from './Components/Card.jsx';
import Counter from './Components/Counter.jsx';
import StudentInfo from './Components/StudentInfo.jsx';

function App() {
  return (
    <div>
      <div className="grid-container">
        <Card />
        <Counter />
        <StudentInfo />
      </div>
    </div>
  );
}

export default App;
