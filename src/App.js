import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
