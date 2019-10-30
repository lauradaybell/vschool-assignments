function balanceParentheses(str){
    let firstCount = 0
    let secondCount = 0
    for (let i=0; i < str.length; i++) {
        if (str[i] === '(') {
            firstCount +=1
        } else if (str[i] === ')') {
            secondCount +=1
        }
    }
    if (firstCount === secondCount) {
        return true
    } else {
        return false
    }
}

console.log(balanceParentheses("()()")) // Output: true
console.log(balanceParentheses("(())")) // Output:  true
console.log(balanceParentheses("()))")) // Output:  false