export interface Profile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  nickname: string;
  bio: string;
  status: string;
  profileImage: string;
}

export interface Challenge {
  title: string;
  description?: string;
  imageUrl?: string;
}
