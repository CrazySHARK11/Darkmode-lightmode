
// Menu bar ======================
const menuicon = document.getElementById("menu-icon");
const menubar = document.getElementById("menubar");

menuicon.addEventListener('click' , ()=>{
    menuicon.classList.toggle("fa-times");
    menubar.classList.toggle("is-active");
})

// Menu bar ======================

// Dark Theme ======================
const Theme = document.getElementById("thicon");

Theme.addEventListener('click' , function(){
    Theme.classList.toggle("fa-moon");
    Theme.classList.toggle("fa-sun");

    document.body.classList.toggle("darkmode");
  
})
// Dark Theme ======================