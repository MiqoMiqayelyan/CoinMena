import { Link, useLocation } from 'react-router-dom';
import './style.css';

type MenuType = {
  isUserLogin: boolean;
}

const Menu = ({ isUserLogin }: MenuType) => {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  const isTradeActive = location.pathname === '/trade';

  return (
    <nav>
      <ul>
        <li>
          <Link className={isHomeActive ? 'active' : ''} to="/">Home</Link>
        </li>
        {isUserLogin && (
          <li>
            <Link className={isTradeActive ? 'active' : ''} to="/trade">Trade</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Menu;
