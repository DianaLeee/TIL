// var itemDescription = document.querySelector(".item-description");
var tableData = document.querySelectorAll("th, td");

// var toggleImgOn = document.querySelector(".toggle-on");
var toggleButtonContainer = document.querySelector(".toggle-button");

toggleButtonContainer.addEventListener("click", function() {
  var onBtn = this.querySelector(".toggle-on");
  var offBtn = this.querySelector(".toggle-off");

  console.log("sdfa");
  if (this.on) {
    //버튼이 눌린 상태 -> 다시 off 로 돌아가야함, 아무것도 없으면 off, .on이면 on
    this.classList.remove("on");
  } else {
    this.classList.add("on");
  }
  this.on = !this.on;
});

tableData.forEach(function(item) {
  item.addEventListener("mouseenter", onclick);
  item.addEventListener("mouseleave", mouseLeave);
});

function onclick() {
  var itemDescription = this.querySelector(".item-description");

  if (itemDescription.active) {
    itemDescription.classList.remove("active");
  } else {
    itemDescription.classList.add("active");
  }

  itemDescription.active = !itemDescription.active;
}

function mouseLeave() {
  var itemDescription = this.querySelector(".item-description");

  if (itemDescription.active) {
    itemDescription.classList.remove("active");
  } else {
    itemDescription.classList.add("active");
  }

  itemDescription.active = !itemDescription.active;
}
