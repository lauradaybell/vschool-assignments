const form = document.form
const button = form.button
console.log(form)


form.addEventListener("submit", function(){
    event.preventDefault();
    let firstName= form.firstName.value;
    let lastName = form.lastName.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let destination = document.getElementById("place").value
    
    let checkedDiet = [];
    let checkedBoxes = document.querySelectorAll("input[name=dietary]:checked");
        for (let i = 0; i < checkedBoxes.length; i++) {
            checkedDiet.push(checkedBoxes[i].value)
        };
    

    alert(`    First Name: ${firstName} 
    Last Name: ${lastName} 
    Age: ${age} 
    Gender: ${gender}  
    Destination: ${destination}
    Dietary Requirements: ${checkedDiet}`)
})
