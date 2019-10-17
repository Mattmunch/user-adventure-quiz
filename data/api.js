export const saveUser = (user) => {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
};

export const getUser = () => {
    const jsonUser = localStorage.getItem('user');
    if (!jsonUser) return null;
    const user = JSON.parse(jsonUser);
    return user;
};
