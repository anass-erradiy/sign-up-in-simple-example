import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Routes ,Route , Link } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" Component={SignIn}/>
        <Route path="/SignUp" Component={SignUp} />
      </Routes>
  );
}

export default App;
