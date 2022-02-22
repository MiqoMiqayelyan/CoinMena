import './style.css';

export type ModalHeaderProps = {
  title?: string,
  hideCloseButton?: boolean,
  onClickHide?: () => void
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ title, hideCloseButton, onClickHide }) => (
  <header className="modal-header">
    <div className="modal-title">
      {title || ''}
    </div>
    {hideCloseButton ? '' : (
      <div className="modal-close" onClick={onClickHide}>
        ×
      </div>
    )}
  </header>
);