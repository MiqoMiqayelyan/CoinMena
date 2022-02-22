import { Link } from "react-router-dom";
import './style.css';

type MenuType = {
  isUserLogin: boolean;
}

const Menu = ({ isUserLogin }: MenuType) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isUserLogin && (
          <li>
            <Link to="/trade">Trade</Link>
          </li>
        )}
      </ul>
    </nav>
   )
}

export default Menu;
