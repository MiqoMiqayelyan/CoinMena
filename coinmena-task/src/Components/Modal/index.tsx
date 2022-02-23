import { useState, useEffect, ReactChild } from 'react';
import clsx from 'clsx';
import ModalHeader from './Header';

import './style.css';

export type ModalType = {
  title?: string;
  hideCloseButton?: boolean;
  open: boolean;
  children: ReactChild;
  onClose?: () => void
}

const Modal = (props: ModalType) => {
  const {
    title,
    hideCloseButton,
    open,
    onClose,
    children,
  } = props;
  const showHeader = !!title || !hideCloseButton;
  const [isOpen, setIsOpen] = useState(false);
  const hiddenClass = isOpen ? '' : 'modal-hidden';

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const close = () => {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  };

  const containerClassName = clsx('modal-container', hiddenClass);

  return (
    <div className={containerClassName}>
      <div className="modal-content">
        {showHeader
          && <ModalHeader title={title} hideCloseButton={hideCloseButton} onClickHide={close} />}
        <main className="modal-main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Modal;
