import { genSalt, getRounds, compare, hash } from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await genSalt(10);
  const hashed = await hash(password, salt);
  return hashed;
};

export const comparePassword = async (
  password: string,
  userPassword: string,
): Promise<boolean> => {
  const result = await compare(password, userPassword);
  return result;
};
