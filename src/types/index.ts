export interface Issue {
  id: number;
  number: number;
  user: User;
  title: string;
  body: string;
  created_at: Date;
  comments: number;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
}
