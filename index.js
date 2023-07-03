// var Increase = document.querySelector(".Increase");
// var Increase = document.querySelector(".Increase");
// var Decrease = document.querySelector(".Decrease");
// var value = document.querySelector("#value");
// var Reset = document.querySelector(".Reset");
// var count = 0;
// Increase.addEventListener("click", function() {
//     count++;
//     value.textContent = count;
//     })
// Decrease.addEventListener("click", function() {
//     count--;
//     value.textContent = count;
//     })
// Reset.addEventListener("click", function() {
//     count = 0;
//     value.textContent = count;
//     })
let count = 0;
var btns = document.querySelectorAll(".btn");
var value = document.querySelector("#value");

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        var btnClassList = btn.classList;
        if (btnClassList.contains("Increase")) {
            count++;
            value.style.color = "green";
        } else if (btnClassList.contains("Decrease")) {
            count--;
            value.style.color = "red";
        } else {
            count = 0;
            value.style.color = "#a0956c";
        }
        value.textContent = count;

})})







