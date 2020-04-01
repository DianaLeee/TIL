var tableData = document.querySelectorAll("th, td");
var toggleButtonContainer = document.querySelector(".toggle-button");
var itemDescription = document.querySelectorAll(".item-description");
var itemContainerImg = document.querySelectorAll(".item-container img");

toggleButtonContainer.addEventListener("click", function() {
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
  itemDescription.forEach(function(item) {
    item.classList.add("active");
  });

  itemContainerImg.forEach(function(item) {
    item.classList.add("active");
  });
}

function deactiveItemDescription() {
  itemDescription.forEach(function(item) {
    item.classList.remove("active");
  });

  itemContainerImg.forEach(function(item) {
    item.classList.remove("active");
  });
}

tableData.forEach(function(item) {
  item.addEventListener("click", onclick);
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

// function mouseLeave() {
//   var itemDescription = this.querySelector(".item-description");

//   if (itemDescription.active) {
//     itemDescription.classList.remove("active");
//   } else {
//     itemDescription.classList.add("active");
//   }

//   itemDescription.active = !itemDescription.active;
// }
