export interface Category {
  _id: string;
  name: string;
  description: string;
  image: string;
  createdAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  createdBy?: User;
  stock?: number;
  rating?: number;
  numReviews?: number;
  createdAt: string;
}

// 🔥 الكارت منفصل
export type CartItem = IProduct & {
  quantity: number;
};
