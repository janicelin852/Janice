
// control navbar
if(document.title == 'Janice Lin | Portfolio' || document.title == 'EMS | Janice Lin' || document.title == 'Remote IO App | Janice Lin'  || document.title == 'Smart Tunnel Light | Janice Lin'){
    document.getElementById("menu_work").classList.add('active');

}else if(document.title == 'About | Janice Lin'){
    document.getElementById("menu_about").classList.add('active');

}



//Get the button
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}