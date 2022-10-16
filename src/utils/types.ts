export type ConversationType = {
	id: number;
	name: string;
	lastMessage: string;
};

export type CreateUserParams = {
	email: string;
	firstName: string;
	lastName: string;
	userName: string;
	password: string;
};

export type UserCredentialsParams = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
};