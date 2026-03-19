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

  // 🔥 بدل categoryId
  category: Category;

  // 🔥 اختياري (حسب الباك عندك)
  createdBy?: User;

  stock?: number;
  rating?: number;
  numReviews?: number;

  createdAt: string;
}