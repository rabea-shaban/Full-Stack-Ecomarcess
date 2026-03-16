type Product = {
  _id: string;
  name?: string;
  price?: number;
  image?: string;
};

const STORAGE_KEY = "wishlist";

export const getWishlist = (): Product[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addToWishlist = (product: Product) => {
  const wishlist = getWishlist();

  const exists = wishlist.some((p) => p._id === product._id);

  if (!exists) {
    const updated = [...wishlist, product];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    window.dispatchEvent(new Event("wishlistUpdated"));

    return updated;
  }

  return wishlist;
};

export const removeFromWishlist = (id: string) => {
  const wishlist = getWishlist();

  const updated = wishlist.filter((p) => p._id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  window.dispatchEvent(new Event("wishlistUpdated"));

  return updated;
};

export const toggleWishlist = (product: Product) => {
  const wishlist = getWishlist();

  const exists = wishlist.some((p) => p._id === product._id);

  return exists ? removeFromWishlist(product._id) : addToWishlist(product);
};

export const isInWishlist = (id: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.some((p) => p._id === id);
};

export const getWishlistCount = () => {
  return getWishlist().length;
};
