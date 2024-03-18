import { useForm } from 'react-hook-form';
import { RegisterUser } from '../../utils/api';
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
} from '../../utils/styles';
import { CreateUserParams } from '../../utils/types';
import styles from './index.module.scss';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserParams>();
  const onSubmit = async (data: CreateUserParams) => {
    try {
      await RegisterUser(data);
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
          {...register('email', {
            required: 'Email is required',
          })}
        />
      </InputContainer>
      <section className={styles.nameFieldRow}>
        <InputContainer>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <InputField
            type='firstName'
            id='firstName'
            {...register('firstName', {
              required: 'First Name is required',
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <InputField
            type='lastName'
            id='lastName'
            {...register('lastName', {
              required: 'Last Name is required',
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor='userName'>User Name</InputLabel>
          <InputField
            type='userName'
            id='userName'
            {...register('userName', {
              required: 'User Name is required',
            })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor='password'>Password</InputLabel>
        <InputField
          type='password'
          id='password'
          {...register('password', {
            required: 'Password is required',
          })}
        />
      </InputContainer>
      <Button>Create My Account</Button>
    </form>
  );
};
