var theForm = document.getElementById("the-form");

theForm.hidden = true;

var button = document.getElementById("buy-button");
button.addEventListener("click", function ()){
    console.log("Buying Item");
};

var productInfo = document.getElementsByClassName("product-props");
var listItems = productInfo.item[0].children;