const deer = document.querySelector("svg");

deer.addEventListener('click', showClass);

function showClass(event) {
    console.log(event.target.classList[0]);
}