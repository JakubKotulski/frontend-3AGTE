import './App.css';
import RegisterForm from './components/RegiserForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}

export default App;
