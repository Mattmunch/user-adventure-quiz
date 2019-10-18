export const scoreReputation = (reputation) => {
    if (reputation <= 0) {
        return 'failed';
    } else return 'success';
};