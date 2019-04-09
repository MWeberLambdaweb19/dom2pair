// Your code goes here
let navLinks = document.querySelector('.nav');
navLinks.addEventListener('mouseover', (event) => {
    event.target.classList.add('navSize');
});
navLinks.addEventListener('mouseout', (event) => {
    event.target.classList.remove('navSize');
});
navLinks.addEventListener('click', (event) => {
    event.preventDefault();
});

let body = document.querySelector('body');
let destinationImg = document.querySelector('#destinationImg');

window.addEventListener('scroll', () => {
    if(scrollY > 550){
        destinationImg.classList.add('destinationImgAni');
    }
});

let emailForm = document.querySelector('#email');

emailForm.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'red';
}, true);

emailForm.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = '';
}, true);

let submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
});

let destinationContent = document.querySelector('.destination');
let btn = document.querySelector('.btn');

destinationContent.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
});

btn.addEventListener('mouseover', (event) => {
    event.stopPropagation();
});