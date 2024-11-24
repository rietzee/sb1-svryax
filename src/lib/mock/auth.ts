import { User } from '@/types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'demo',
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@example.com',
    groupType: 'premium',
    balance: {
      current: 850,
      limit: 1000,
      used: 150,
    },
    sendingQuota: {
      current: 8500,
      limit: 10000,
    },
  },
];

export async function mockSignIn(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const user = mockUsers.find((u) => u.email === email);
  if (!user || password !== 'demo123') {
    throw new Error('Invalid credentials');
  }
  return user;
}

export async function mockSignUp(data: Partial<User>) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newUser: User = {
    id: String(mockUsers.length + 1),
    username: data.username!,
    firstName: data.firstName!,
    lastName: data.lastName!,
    email: data.email!,
    groupType: 'free',
    balance: {
      current: 100,
      limit: 100,
      used: 0,
    },
    sendingQuota: {
      current: 1000,
      limit: 1000,
    },
  };
  mockUsers.push(newUser);
  return newUser;
}

export async function mockResetPassword(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const user = mockUsers.find((u) => u.email === email);
  if (!user) {
    throw new Error('User not found');
  }
  return true;
}