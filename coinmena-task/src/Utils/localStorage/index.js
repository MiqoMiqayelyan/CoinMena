export const setItemToStorage = (name, value) => {
    localStorage.setItem(name, value)
}

export const getItemToStorage = (name) => {
    return localStorage.getItem(name)
}

export const removeItemToStorage = (name) => {
    localStorage.removeItem(name);
}