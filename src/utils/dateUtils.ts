import {
    setHours,
    setSeconds,
    setMinutes,
    setMilliseconds,
    format,
} from 'date-fns';

// ISO 8601 zulu time zone (UTC)
export function convertToISO8601UTCDateFormat(date: Date): string {
    const formattedDate = format(
        setMilliseconds(setSeconds(setMinutes(setHours(date, 23), 59), 59), 0),
        "yyyy-MM-dd'T'HH:mm:ss'Z'",
    );

    return formattedDate;
}

export function getISO8601UTCDateFormatRegex(): RegExp {
    return /^\d{4}-((?!00)[0]\d|1[0-2])-((?!00)[0-2]\d|3[0-1])T([0-1]\d|2[0-3]):[0-5]\d:[0-5]\dZ$/g;
}

export function convertToBrasilianDateFormat(date: Date): string {
    const formattedDate = format(new Date(date), 'dd/MM/yyyy');

    return formattedDate;
}
