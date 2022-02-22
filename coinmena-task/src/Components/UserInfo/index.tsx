import { useState } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import LoginForm from '../Forms/LoginForm';

import './style.css';

export type userInfoType = {
  isUserLogin: boolean;
  handleUserLogin: () => void;
}

const UserInfo = ({
  isUserLogin,
  handleUserLogin
}: userInfoType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsOpen(true);
  }

  const onModalClose = () => {
    setIsOpen(false);
  }

  return !isUserLogin && (
    <div className='user-information'>
      <Button onButtonClick={handleLoginClick}>
      Log In
    </Button>
      <Modal onClose={onModalClose} open={isOpen}>
        <LoginForm handleUserLogin={handleUserLogin} />
      </Modal>
    </div>
  )
}

export default UserInfo;
