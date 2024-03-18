import axios, { AxiosRequestConfig } from 'axios';
import { Conversation, CreateUserParams, User, UserCredentialsParams } from './types';

const { REACT_APP_API_URL } = process.env;
const axiosClient = axios.create({ baseURL: REACT_APP_API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const RegisterUser = async (data: CreateUserParams) => {
	const { email, firstName: first_name, lastName: last_name, password, userName: user_name } = data;
	return axiosClient.post(
    `/auth/register`,
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

export const LoginUser = async ({ email, password }: UserCredentialsParams) => {
  const data = { username: email, password };
  axiosClient.post(`/auth/login`, data, config);
}

export const getAuthUser = () => axiosClient.get<User>(`/auth/status`, config);

export const getConversations = () =>
  axiosClient.get<Conversation[]>(`/conversations`, config);