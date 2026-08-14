function isValid(s) {
    const stack = [];
    const brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const topOfStack = stack.pop();

            if (topOfStack !== brackets[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}