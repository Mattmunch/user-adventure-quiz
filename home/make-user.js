export const makeUser = (formData) => {
    const user = {
        name: formData.get('name'),
        nbastar: formData.get('nbastar'),
        reputation: 40,
        salary: 20,
        completed: {}
    };
    return user;
};

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    nbastar: formData.get('nbastar'),
    reputation: 40,
    salary: 20,
    completed: {}
});