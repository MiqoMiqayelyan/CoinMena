import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import { getItemToStorage } from './Utils/localStorage';

import './App.css';

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);

  useEffect(() => {
    const loginInfo = getItemToStorage('isUserLogin');

    setIsUserLogin(Boolean(loginInfo));
  }, [])

  const handleUserLogin = () => {
    setIsUserLogin(true);
  }

  return (
    <Router>
      <Header isUserLogin={isUserLogin} handleUserLogin={handleUserLogin} />
      <Routes>
        <Route path="/" />
        <Route path="/trade" />
      </Routes>
    </Router>
  );
}

export default App;
