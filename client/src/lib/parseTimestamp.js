export const parseTimestamp = (createdAt) => {
    const dateObj = new Date(createdAt);

    return {
        date: dateObj.toLocaleDateString(),
        time: dateObj.toLocaleTimeString(),
    }
};