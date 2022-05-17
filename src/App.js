import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
<Route path='/' exact element={<Addstudent/>}/>
<Route path='/search' exact element={<Searchstudent/>}/>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
