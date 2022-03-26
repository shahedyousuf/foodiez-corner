
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Food from './Component/Food/Food';
import Question from './Component/Question/Question';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Food></Food>
      <Question></Question>
    </div>
  );
}

export default App;
