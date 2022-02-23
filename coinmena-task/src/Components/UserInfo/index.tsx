import { useState, useCallback } from 'react';
import Button from '../Button';
import Modal from '../Modal';
import LoginForm from '../Forms/LoginForm';
import { removeItemToStorage } from '../../Utils/localStorage';

import './style.css';

export type userInfoType = {
  isUserLogin: boolean;
  userLoginToggle: (arg?: boolean) => void;
}

const UserInfo = ({
  isUserLogin,
  userLoginToggle,
}: userInfoType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLoginClick = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLogOutClick = useCallback(() => {
    removeItemToStorage('isUserLogin');
    userLoginToggle(false);
  }, [userLoginToggle]);

  const handleFormSubmit = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="user-information">
      {isUserLogin ? (
        <Button onButtonClick={handleLogOutClick}>
          Log Out
        </Button>
      ) : (
        <>
          <Button onButtonClick={handleLoginClick}>
            Log In
          </Button>
          <Modal onClose={onModalClose} open={isOpen}>
            <LoginForm onFormSubmit={handleFormSubmit} userLoginToggle={userLoginToggle} />
          </Modal>
        </>
      )}
    </div>
  );
};

export default UserInfo;
