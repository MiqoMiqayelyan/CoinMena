import { Link } from "react-router-dom";
import './style.css';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trade">Trade</Link>
        </li>
      </ul>
    </nav>
   )
}

export default Menu;
