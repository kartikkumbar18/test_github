
import './App.css';
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Github_Login from '../src/component/Github_Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
    <Routes>
   
      <Route path='/' element={<Github_Login/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
