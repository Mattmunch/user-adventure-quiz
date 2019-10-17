export const scoreSalary = (salary) => {
    if (salary <= 0) {
        return 'poor';
    } else return 'rich';
};