const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', (toggle) => 
    nav.classList.toggle('active'));
