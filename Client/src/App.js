import './App.css';
import {React} from 'react';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </nav>
  );
}

export default App;
