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
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;
};

export type Conversation = {
  id: number;
  creator: User;
  recipient: User;
}

export type SelectableTheme = 'dark' | 'light';

export type Message = {
  id: number;
  content?: string;
  created_at: string;
  author: User;
  conversation: Conversation;
};

export type FetchMessagePayload = {
  id: number;
  messages: Message[];
};