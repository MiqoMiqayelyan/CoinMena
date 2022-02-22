import Menu from '../Menu';
import UserInfo from '../UserInfo';

import './style.css';

const HeaderContainer = () => {
  return (
    <header className='header-container'>
      <Menu />
      <UserInfo />
    </header>
  )
}

export default HeaderContainer;
