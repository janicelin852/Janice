
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


// prev next button
var list = [
  {
      title:'EMS | Janice Lin',
      src:'https://janicelin852.github.io/JaniceLin/src/page/EMS.html',
      btn:'The Energy Management System(EMS)'
  },
  {
      title:'Remote IO App | Janice Lin',
      src:'https://janicelin852.github.io/JaniceLin/src/page/RemoteIO.html',
      btn:'Remote IO App'
  },
  {
      title:'Smart Tunnel Light | Janice Lin',
      src:'https://janicelin852.github.io/JaniceLin/src/page/SmartTunnelLight.html',
      btn:'Smart Tunnel Light Experience'
  },

];


var title_name = document.title;// 抓這頁的title
var page_index = 0;
list.forEach((item,index) => {
  if(item.title == title_name){
      page_index = index;
  }
})

// 如果不是第一頁
if(page_index != 0){
  document.getElementById('prev').href = list[page_index - 1].src;
  document.getElementById('text_prev').innerText = list[page_index - 1].btn;

// 如果是第一頁 前一頁按鈕消失
}else{
  document.getElementById('prev').style['display'] = 'none';
}

// 如果不是最後一頁
if(page_index != list.length - 1){
  document.getElementById('next').href = list[page_index + 1].src;
  document.getElementById('text_next').innerText = list[page_index + 1].btn;

// 如果是最後一頁 下一頁按鈕消失
}else{
  document.getElementById('next').style['display'] = 'none';
}



