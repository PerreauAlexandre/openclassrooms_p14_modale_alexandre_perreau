import './index.css'

export type ModalProps = {
  content: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function Modal({ content, isOpen, closeModal }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal_overlay">
      <div className="modal">
        <div className="modal_content">{content}</div>
        <button className="close_button" onClick={closeModal}>
          Fermer
        </button>
      </div>
    </div>
  );
};
