import axios, { AxiosRequestConfig } from 'axios';
import { CreateUserParams, User, UserCredentialsParams } from './types';

const { REACT_APP_API_URL } = process.env;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: CreateUserParams) => 
	axios.post(`${REACT_APP_API_URL}/auth/register`, data, config);

export const postLoginUser = async (data: UserCredentialsParams) =>
  axios.post(`${REACT_APP_API_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get<User>(`${REACT_APP_API_URL}/auth/status`, config);