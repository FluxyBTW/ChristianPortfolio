
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');

}




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 170;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
           //active section for animation on scroll
            sec.classList.add('show-animation');
        }
        //if you want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animation');
        }
        
    });

    //sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
     menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

}