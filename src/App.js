import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

import { Routes ,Route , Link } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
      <Routes>
        <Route path="/" Component={SignIn}/>
        <Route path="/SignUp" Component={SignUp} />
        <Route path="/home" Component={Home} />
      </Routes>
  );
}

export default App;
