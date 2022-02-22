import * as React from 'react';

export type ModalHeaderProps = {
    title?: string,
    hideCloseButton?: boolean,
    onClickHide?: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, hideCloseButton, onClickHide }) => (
    <header className="bpui-modal-header">
        <div className="bpui-modal-title">
            {title || ''}
        </div>
        {hideCloseButton ? '' : (
            <div className="bpui-modal-close" onClick={onClickHide}>
                ×
            </div>
        )}
    </header>
);