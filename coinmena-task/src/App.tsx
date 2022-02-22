import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import HeaderContainer from "./Components/Header";

import './App.css';

const App = () => {
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" />
        <Route path="/trade" />
      </Routes>
    </Router>
  );
}

export default App;
