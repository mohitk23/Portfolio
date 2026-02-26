
var typed = new Typed("#element", {
    strings: ["Web Developer", "Full Stack Developer"],
    typeSpeed: 60,
});

// form to google sheet    
const scriptURL = 'https://script.google.com/macros/s/AKfycbzM-BaxdSZM5vfYzAYyk1aBNJlxKn-DSUUX4hLwdTZ83TynVDLuONlNZtHKIj5mThg/exec'
const form = document.forms['Contact-form-to-google-sheet'];
const msg = document.getElementById("msg");
    
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function(){
            msg.innerHTML= "";
        },5000)
        form.reset()
        })
        .catch(error => {
            msg.innerHTML = "Something went wrong!";
            msg.style.color = "red";
        })
})

const menu = document.querySelector(".nav_menu");

function toggleMenu(){
    menu.classList.toggle("active");
}