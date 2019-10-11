
var shareButton = document.querySelector(".symbolS");
// var shareArea = document.querySelector(").S;
function showShareB(){
    var shareBList = document.querySelector(".SButtonUl");
    shareBList.classList.remove("hidden");
}
function hiddenShareB(){
    var shareBList = document.querySelector(".SButtonUl");
    shareBList.classList.add("hidden");
}
function toggleShareB(){
    var shareBList = document.querySelector(".SButtonUl");
    shareBList.classList.toggle("hidden");
}
// shareButton.addEventListener("mouseover", showShareB, false);
// shareButton.addEventListener("mouseout", hiddenShareB, false);
shareButton.addEventListener("click", toggleShareB, false);
// shareButton.addEventListener("click", hiddenShareB, false);