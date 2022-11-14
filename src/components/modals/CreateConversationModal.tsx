import {
  Dispatch,
  SetStateAction,
  createRef,
  MouseEvent,
  FC,
  useEffect,
} from 'react';
import { OverlayStyle } from '../../utils/styles';
import { ModalBody, ModalContainer, ModalHeader } from '.';
import { CreateConversationForm } from '../forms/CreateConversationForm';
import { MdClose } from 'react-icons/md';

type Props = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export const CreateConversationModal: FC<Props> = ({ setShowModal }) => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) =>
      event.key === 'Escape' && setShowModal(false);
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const handleOverlayClick = (event: MouseEvent) => {
    const { current } = ref;
    if (current === event.target) {
      setShowModal(false);
    }
  };

  return (
    <OverlayStyle ref={ref} onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <h2>Create a Conversation</h2>
          <MdClose size={32} onClick={() => setShowModal(false)} />
        </ModalHeader>
        <ModalBody>
          <CreateConversationForm />
        </ModalBody>
      </ModalContainer>
    </OverlayStyle>
  );
};
