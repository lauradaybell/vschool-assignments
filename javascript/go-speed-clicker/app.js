const clicks = document.getElementById("click")
const h5 = document.getElementById("response")
const old = document.getElementById("old")
let count = 0
const deJsonifiedclicks = JSON.parse(localStorage.clicks)
old.textContent = deJsonifiedclicks

clicks.addEventListener('click', () =>  {
    h5.textContent = count += 1;
    localStorage.clicks = h5.textContent;
})
// console.log(h5.textContent.value)
// localStorage.clicks = h5.textContent