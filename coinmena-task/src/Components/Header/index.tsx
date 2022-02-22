import Menu from '../Menu';
import UserInfo from '../UserInfo';

import './style.css';

export type headerType = {
  isUserLogin: boolean;
  handleUserLogin: () => void;
}

const Header = ({
  isUserLogin,
  handleUserLogin
}: headerType) => {
  return (
    <header className='header-container'>
      <Menu isUserLogin={isUserLogin} />
      <UserInfo isUserLogin={isUserLogin} handleUserLogin={handleUserLogin} />
    </header>
  )
}

export default Header;
