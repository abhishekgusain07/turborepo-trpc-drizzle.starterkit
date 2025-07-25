export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  emailVerified: boolean;
  allowedSavingData: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  id: string;
  userId: string;
  expiresAt: Date;
  token: string;
  ipAddress?: string;
  userAgent?: string;
  user: User;
}