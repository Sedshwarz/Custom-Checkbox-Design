var opnBtn = document.getElementById("openThm");
var toglebtn = document.querySelector(".toglebtn");
var thmBtns = document.querySelectorAll(".themeBtn");

opnBtn.onclick = function(){
    toglebtn.classList.toggle("open");                                          // Theme Buttons Div Toggle
}


for (var i = 0; i < thmBtns.length; i++) {
  thmBtns[i].onclick = function(){
    for (var ib = 0; ib < thmBtns.length; ib++) {
      thmBtns[ib].classList.remove("chosen");                                   // Changing Theme Color
    }
    this.classList.add("chosen");
      var color = this.getAttribute("data-color");
      document.querySelector(":root").style.setProperty('--theme',color);
  }
}




var boxes = document.querySelectorAll(".cbLabel");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function(){                                                // Checkbox Function
    this.classList.toggle("checked");
  }
}
