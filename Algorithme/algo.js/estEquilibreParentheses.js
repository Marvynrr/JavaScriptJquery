// Cet algorithme est utile pour vérifier la validité de 
// nombreuses expressions mathématiques ou pour vous assurer 
// que les parenthèses sont correctement associées dans un texte ou un code.

function estEquilibreParentheses(expression) {
    const stack = [];
    for (let i = 0; i < expression.length; i++) {
        const caractere = expression[i];
        if (caractere === "(") {
            stack.push(caractere);
        } else if (caractere === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
        }
    }
    return stack.length === 0;
}

const expression = "((a + b) * (c - d))";
const estEquilibre = estEquilibreParentheses(expression);
console.log("Les parenthèses sont équilibrées : " + estEquilibre);