const toggleButton = document.getElementById('toggle')
const navBarLinks = document.getElementById('links')
console.log("this is the togglebutton", toggleButton)

toggleButton.addEventListener('click', () => { navBarLinks.classList.toggle('active') })