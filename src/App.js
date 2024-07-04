import logo from './logo.svg';
//import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>SignUp If you not have account</h2>
        <Signup/>
        <h2>Signin If you have account</h2>
        <Login />

        
        <h3>Sir check traffic in INSPECT</h3>
      </header>
    </div>
  );
}

export default App;
