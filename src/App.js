import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';

function App() {
  return (
    <div>
      <Addstudent/>
      <Searchstudent/>
    </div>
  );
}

export default App;
