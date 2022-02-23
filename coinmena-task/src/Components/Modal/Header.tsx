import './style.css';

export type ModalHeaderProps = {
  title?: string,
  hideCloseButton?: boolean,
  onClickHide?: () => void
}

const ModalHeader = ({
  title,
  hideCloseButton,
  onClickHide,
}: ModalHeaderProps) => (
  <header className="modal-header">
    <div className="modal-title">
      {title || ''}
    </div>
    {hideCloseButton ? '' : (
      <div
        tabIndex={0}
        role="button"
        className="modal-close"
        onClick={onClickHide}
        onKeyDown={onClickHide}
      >
        ×
      </div>
    )}
  </header>
);

export default ModalHeader;
