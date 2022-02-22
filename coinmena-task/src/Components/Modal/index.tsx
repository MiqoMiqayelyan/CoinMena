import { useState, useEffect } from 'react';
import { ModalHeader } from './Header';

import './style.css';

type ModalType = {
    title?: string;
    hideCloseButton?: boolean;
    open: boolean;
    onClose: () => void
}

const Modal = (props: ModalType) => {
    const {
      title,
      hideCloseButton,
      open,
      onClose,
    } = props;
    const showHeader = !!title || !hideCloseButton;
    const [closed, setClosed] = useState(false);
    const hiddenClass = closed ? 'modal-hidden' : '';

    useEffect(() => {
        setClosed(open);

    },[open]);

    const close = () => {
        if(onClose){
            onClose();
        }
        setClosed(true);
    };

    return (
        <div className={hiddenClass}>
            {showHeader && <ModalHeader onClickHide={close} />}
        </div>
    )
}

export default Modal;