function sum (x, y) {
    try {
        if (x.type != "number" || y.type != "number") {
            throw "Input type must be number!"
        };
    } finally {
        console.log("This happened.")
    };
    return x + y;
}
console.log(sum(7, 5))