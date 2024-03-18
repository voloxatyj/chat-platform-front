import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../utils/api';
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

  const navigate = useNavigate();
  const onSubmit = async (data: UserCredentialsParams) => {
    try {
      await LoginUser(data);
      navigate('/conversations');
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
