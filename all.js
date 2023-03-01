//big image
let classy = document.getElementsByClassName("image");
let img = document.getElementById("bigImage");
function openImg(n) {
    document.getElementById("myImg").style.height = "100%";
    img.src = "image" + n + ".jpg";
}
function closeImg() {
    document.getElementById("myImg").style.height = "0%";
}
//small image
let smallimage = document.getElementsByClassName("imageOfImage");
var i;
for (i = 0; i < smallimage.length; i++) {
    smallimage[i].src = "image" + i + ".jpg";
}
//menu
function openRightMenu() {
var v = document.getElementById("menuOfRight");
    if (v.style.display == "none"){
        v.style.display = "block";
    }else{
        v.style.display = "none";
    }
}
function openLeftMenu() {
var v = document.getElementById("menuOfLeft");
    if (v.style.display == "none"){
        v.style.display = "block";
    }else{
        v.style.display = "none";
    }
}
var sub = document.getElementsByClassName("content-tent");
function phoneClick(m) {
    if (sub[m].style.display === "block") {
        sub[m].style.display = "none";
    } else {
        sub[m].style.display = "block";
    }
}