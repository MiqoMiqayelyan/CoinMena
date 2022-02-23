import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header';
import { getItemToStorage } from './Utils/localStorage';

import './App.css';

const App = () => {
  const [isUserLogin, setIsUserLogin] = useState<boolean>(false);

  useEffect(() => {
    const loginInfo = getItemToStorage('isUserLogin');

    setIsUserLogin(Boolean(loginInfo));
  }, []);

  const userLoginToggle = (login = true) => {
    setIsUserLogin(login);
  };

  return (
    <Router>
      <Header isUserLogin={isUserLogin} userLoginToggle={userLoginToggle} />
      <Routes>
        <Route path="/" />
        <Route path="/trade" />
      </Routes>
    </Router>
  );
};

export default App;
