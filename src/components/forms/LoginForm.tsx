import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { postLoginUser } from '../../utils/api';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import { UserCredentialsParams } from '../../utils/types';
import styles from './index.module.scss';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentialsParams>();

  const onSubmit = async (data: UserCredentialsParams) => {
    try {
      await postLoginUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <InputField
          type='email'
          id='email'
          {...register('email', { required: true })}
        />
      </InputContainer>
      <InputContainer className={styles.loginFormPassword}>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          type='password'
          id='password'
          {...register('password', { required: true })}
        />
      </InputContainer>
      <Button>Login</Button>
      <div className={styles.footerText}>
        <span>Don't have an account? </span>
        <Link to='/register'>
          <span>Sign Up</span>
        </Link>
      </div>
    </form>
  );
};
