import {Routes,Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home'
function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
