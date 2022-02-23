export const setItemToStorage = (name, value) => {
  localStorage.setItem(name, value);
};

export const getItemToStorage = (name) => localStorage.getItem(name);

export const removeItemToStorage = (name) => {
  localStorage.removeItem(name);
};
