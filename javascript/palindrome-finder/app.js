function palindromeFinder(str) {
    let revString = '';
    let newString = '';
    let lower = str.toLowerCase();
    for (let i = lower.length -1; i >= 0; i--) {
        if (lower.charCodeAt([i]) < 122 && lower.charCodeAt([i]) > 97) {
            revString += lower[i]
        } 
        // console.log(revString)
    }
    for (let i = 0; i < lower.length; i++ ) {
        if (lower.charCodeAt([i]) < 122 && lower.charCodeAt([i]) > 97) {
            newString += lower[i]
        }
        // console.log(newString)
    }
    if (revString === newString) {
        // console.log(true)
        return true;
    } else {
        // console.log(false)
        return false;
    }
}
console.log(palindromeFinder("Star Rats"));
console.log(palindromeFinder("palindrome"));
palindromeFinder("I madam, I made radio! So I dared! Am I mad?? Am I?!")
