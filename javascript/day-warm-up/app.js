// given a string representing a day of the week (Tue), and a number of days after that day (2), return the day of the week that results from the number of days after the given day.
function whatDay(startingDay, numOfDays) {
    const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] 
    let day = days.indexOf(startingDay)
    newday= day + numOfDays
    let real = newday > 6 ? (newday - 7) : newday
    return days[real]
}
console.log(whatDay('Tuesday', 4))  
// => ‘Sat’
console.log (whatDay('Sunday', 14))
//   => ‘Wed’`