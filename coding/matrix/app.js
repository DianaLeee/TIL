// var itemDescription = document.querySelector(".item-description");
var tableData = document.querySelectorAll("th, td");

// var toggleImgOn = document.querySelector(".toggle-on");
var toggleButtonContainer = document.querySelector(".toggle-button");

toggleButtonContainer.addEventListener("click", function() {
  var onBtn = this.querySelector(".toggle-on");
  var offBtn = this.querySelector(".toggle-off");

  if (this.on) {
    this.classList.remove("on");
    deactiveItemDescription();
  } else {
    this.classList.add("on");
    activeItemDescription();
  }
  this.on = !this.on;
});

function activeItemDescription() {
  var itemDescription = document.querySelectorAll(".item-description");
  itemDescription.forEach(function(item) {
    item.classList.add("active");
  });
}

function deactiveItemDescription() {
  var itemDescription = document.querySelectorAll(".item-description");
  itemDescription.forEach(function(item) {
    item.classList.remove("active");
  });
}

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
