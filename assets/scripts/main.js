
var shareButton = document.querySelector(".S");
function showShareB(){
    var shareBList = document.querySelector(".SButtonUl");
    shareBList.classList.remove("hidden");
}
function hiddenShareB(){
    var shareBList = document.querySelector(".SButtonUl");
    shareBList.classList.add("hidden");
}

shareButton.addEventListener("mouseout", hiddenShareB, false);
shareButton.addEventListener("mouseover", showShareB, false);
