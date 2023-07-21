import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './page/Home/Home';
import Profil from './page/Profil/Profil';
import BaseLayout from './components/BaseLayout';
import Home from './page/Home/Home';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<BaseLayout />}>

          <Route index element={<Profil />} />
          <Route path='/home/:id' element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
