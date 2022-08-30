// to declare const for the selected control
const humberger = document.querySelector('.header .nav-bar .nav-list .humberger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

humberger.addEventListener('click', ()=>{
    humberger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

// to add background color while scrooling at the header
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29325c"
    }else{
        header.style.backgroundColor = "transparent"
    }
})

// to make the humberger close after clicking on the selected page to visit
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        humberger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})
