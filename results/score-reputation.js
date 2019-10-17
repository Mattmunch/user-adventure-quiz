export const scoreReputation = (reputation) => {
    if (reputation <= 0) {
        return 'dead';
    } else return 'healthy';
};