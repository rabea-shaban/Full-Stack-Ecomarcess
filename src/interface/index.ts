interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    createdAt: string;
    __v: number;
  }
  
  interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: string;
    __v: number;
  }
  
  export interface IProduct {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: Category;
    createdBy: User;
    createdAt: string;
    __v: number;
  }