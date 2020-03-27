// var itemDescription = document.querySelector(".item-description");
var tableData = document.querySelectorAll("th, td");

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
