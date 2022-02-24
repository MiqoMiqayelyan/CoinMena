import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import Header from './Components/Header';
import Home from './Pages/Home';
import { getItemToStorage } from './Utils/localStorage';

import './App.css';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header isUserLogin={isUserLogin} userLoginToggle={userLoginToggle} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trade" />
          </Routes>
        </main>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
