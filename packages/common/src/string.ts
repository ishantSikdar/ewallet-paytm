import { emailRegex, tenDigitNumberRegex } from "./regex";

export const getInitials = (name: string) => {
    if (!name) return '';

    // Split the name into words
    const words = name.split(' ');

    // Extract the first letter of the first two words
    const initials = words.slice(0, 2).map(word => word[0]?.toUpperCase());

    // Join the initials and return the result
    return initials.join('');
};

export const isMobileThenReturn = (key: string) => {
    return tenDigitNumberRegex.test(key) ? key : null;   
}

export const isEmailThenReturn = (key: string) => {
    return emailRegex.test(key) ? key : null;   
}