interface LocaleTimeStamp {
    date: string,
    time: string
}

export const parseTimestamp = (createdAt: string): LocaleTimeStamp => {
    const dateObj = new Date(createdAt);

    return {
        date: dateObj.toLocaleDateString(),
        time: dateObj.toLocaleTimeString(),
    }
};