import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, User, UserCredentialsParams } from './types';

const { REACT_APP_API_URL } = process.env;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: CreateUserParams) => {
	const { email, firstName: first_name, lastName: last_name, password, userName: user_name } = data;
	return axios.post(
    `${REACT_APP_API_URL}/auth/register`,
    {
      email,
      first_name,
      last_name,
      password,
      user_name,
    },
    config,
  );
}

export const postLoginUser = async (data: UserCredentialsParams) =>
  axios.post(`${REACT_APP_API_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get<User>(`${REACT_APP_API_URL}/auth/status`, config);