const form= document.mario
const goombas = form.goombas
const bobombs = form.bobombs
const cheepcheeps = form.cheepcheeps


form.addEventListener("submit",function() {
    event.preventDefault();
     document.getElementById("result").innerHTML = "$" + (+(goombas.value * 5) + +(bobombs.value * 7) + +(cheepcheeps.value * 11))
})