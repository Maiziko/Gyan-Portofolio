const nav = document.getElementById('nav');
window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;

    if ( scrollposition >= 60 ) {
        nav.classList.add('nav-dark');
    } else if (scrollposition <= 60) {
        nav.classList.remove('nav-dark');
    }
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}