export function truncateStringWithEllipsis(inputString: string, maxLength: number = 150) {
    if (inputString.length > maxLength) {
        // Truncate the string to maxLength characters
        const truncatedString = inputString.slice(0, maxLength);

        // Find the last word in the truncated string
        const lastWordIndex = truncatedString.lastIndexOf(" ");
        const lastWord = lastWordIndex !== -1 ? truncatedString.slice(lastWordIndex + 1) : "";

        // Concatenate the truncated string with ellipsis and the last word
        const result = `${truncatedString.slice(0, lastWordIndex)} ${lastWord}...`;

        return result;
    } else {
        // If the inputString is shorter than the maxLength, return it as-is
        return inputString;
    }
}
