var allproducts = document.querySelectorAll(".list li")
var contant = document.querySelector("#contant")
var btn = document.querySelector("#btn1")
var totalprice =0
var price = document.querySelector("prs")


allproducts.forEach(function (item) {
  item.onclick=  function() {
    totalprice += Number (item.getAttribute("price"))
    contant.innerHTML += item.textContent + "/ "
    if (contant.innerHTML !="") {
       btn.style.display ="block"
    }
  }
} )

btn.onclick = function() {
    prs.innerHTML=totalprice
}