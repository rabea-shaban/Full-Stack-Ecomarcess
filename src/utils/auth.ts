export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const setUser = (user: unknown) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
