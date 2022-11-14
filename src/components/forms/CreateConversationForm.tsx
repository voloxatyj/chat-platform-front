import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
  TextField,
} from '../../utils/styles';
import styles from './index.module.scss';

export const CreateConversationForm = () => {
  return (
    <form id='conversationForm' className={styles.CreateConversationForm}>
      <section className={styles.message}>
        <InputContainer backgroundColor='#161616'>
          <InputLabel>Recipient</InputLabel>
          <InputField />
        </InputContainer>
      </section>
      <section className={styles.message}>
        <InputContainer backgroundColor='#161616'>
          <InputLabel>Message (optional)</InputLabel>
          <TextField />
        </InputContainer>
      </section>
      <Button>Create Conversation</Button>
    </form>
  );
};
