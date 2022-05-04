import './App.css';
import RegisterForm from './components/Pages/RegiserPage/RegisterForm';
import LoginForm from './components/Pages/LoginPage/LoginForm';
import MainPage from './components/Pages/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import AccountPage from './components/Pages/AccountPage/AccountPage';
import CheckShoppingPage from './components/Pages/CheckShoppingPage/CheckShoppingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <div className="App"></div>
      <NavBar/>
      <Routes>
        <Route path = "/" element = {<MainPage />} exact = {true}/>
        <Route path = "/login-form" element = {<LoginForm/>}/>
        <Route path = "/sigin-form" element = {<RegisterForm />}/>
        <Route path = "/finish-shopping" element = {<CheckShoppingPage />}/>
        <Route path = "/account" element = {<AccountPage/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
