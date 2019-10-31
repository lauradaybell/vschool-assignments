

function multiplicationTable(n) {
    const grid = []
    for (let i = 1; i <= n; i++) {
        let row = []
        for (let j = 1; j <= n; j++ ) {
            row.push(i*j)
        } grid.push(row)
    }return grid
}

console.log(multiplicationTable(10))