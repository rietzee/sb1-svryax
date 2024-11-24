export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  groupType: 'free' | 'premium' | 'enterprise';
  balance: {
    current: number;
    limit: number;
    used: number;
  };
  sendingQuota: {
    current: number;
    limit: number;
  };
}