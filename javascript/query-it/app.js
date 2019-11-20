const database = [
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jill", lastName: "Johnson", age: 20},
    {firstName: "Jill", lastName: "Smith", age: 100},
    {firstName: "Jack", lastName: "White", age: 2}
];

const filterDatabase = (query, data) => {
    const filteredData = data.filter(item => {
        for(key in query){
            if(query[key] !== item[key]){
                return false
            } 
        
            console.log("key:", key)
            console.log("value:", query[key])
        }
        return true 
    })
    return filteredData
}
console.log(filterDatabase({firstName: "Jack", age: 2}, database));

// ----------------------------
// returns entire database array
// console.log(filterDatabase({}, database))

// ------------------
// returns empty array
// console.log(filterDatabase({dolphin: "squeak!"}, database))

// -------------------------
/* 
returns the following array:
[
    {firstName: "Jack", lastName: "Smith", age: 2},
    {firstName: "Jack", lastName: "White", age: 2}
]
*/
// console.log(filterDatabase({firstName: "Jack", age: 2}, database))
 
