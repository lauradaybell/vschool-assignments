
function fizzBuzz() {
    const newArr = []
    const count = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0,
    }
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            newArr.push("fizzbuzz");
            count.fizzbuzz += 1;
        } else if (i % 3 === 0) {
            newArr.push("fizz");
            count.fizz += 1;
        } else if (i % 5 === 0) {
            newArr.push("buzz")
            count.buzz +=1
        } else {
            newArr.push(i)
        }
    } console.log(count)
    return newArr 
    
}
console.log(fizzBuzz())

