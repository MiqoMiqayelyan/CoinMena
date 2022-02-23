import Menu from '../Menu';
import UserInfo from '../UserInfo';

import './style.css';

export type headerType = {
  isUserLogin: boolean;
  userLoginToggle: () => void;
}

const Header = ({
  isUserLogin,
  userLoginToggle,
}: headerType) => (
  <header className="header-container">
    <Menu isUserLogin={isUserLogin} />
    <UserInfo isUserLogin={isUserLogin} userLoginToggle={userLoginToggle} />
  </header>
);

export default Header;
