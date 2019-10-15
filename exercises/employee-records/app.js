const employees = []

function Employee (name, jobTitle, salary, status = "Full Time") {
    
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.printEmployeeForm = function() {
        console.log(`${name}, ${jobTitle}, ${salary}, ${status}`)
    }
    this.status = status
}

const BettySmith = new Employee ("Betty Smith", "receptionist", "$25/hour")
console.log(BettySmith)
employees.push(BettySmith)


const MarySnow = new Employee ("Mary Snow", "head boss", "$75000/year")
console.log(MarySnow)
employees.push(MarySnow)

const BertAsp = new Employee ("Bert Asp", "teacher", "12/hour", status = "Contract")
console.log(BertAsp)
employees.push(BertAsp)
console.log(employees)