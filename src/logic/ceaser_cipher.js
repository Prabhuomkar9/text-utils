export function encode(text, cipherKey = text.length) {
    let ans = "";
    for (let index = 0; index < text.length; index++) {
        let currentChar = text[index];
        if (/[^a-zA-Z]/.test(currentChar)) {
            ans += currentChar;
        } else {
            let isUpperCase = currentChar === currentChar.toUpperCase();
            let baseCharCode = isUpperCase
                ? "A".charCodeAt(0)
                : "a".charCodeAt(0);

            ans += String.fromCharCode(
                baseCharCode +
                    ((currentChar.charCodeAt(0) - baseCharCode + cipherKey) %
                        26)
            );
        }
    }
    return ans;
}

export function decode(text, cipherKey = text.length) {
    let ans = "";
    for (let index = 0; index < text.length; index++) {
        let currentChar = text[index];
        if (/[^a-zA-Z]/.test(currentChar)) {
            ans += currentChar;
        } else {
            let isUpperCase = currentChar === currentChar.toUpperCase();
            let baseCharCode = isUpperCase
                ? "A".charCodeAt(0)
                : "a".charCodeAt(0);

            let decodedCharCode =
                baseCharCode +
                ((currentChar.charCodeAt(0) - baseCharCode - cipherKey) % 26);

            if (decodedCharCode < baseCharCode) decodedCharCode += 26;

            ans += String.fromCharCode(decodedCharCode);
        }
    }
    return ans;
}
