let imgbox = document.querySelector(".img-box");
let imgwrap = document.querySelector(".img-wrap");
let leftspace = imgbox.offsetLeft;
let originalimg = document.getElementById("original-img");
let line = document.getElementById("line");

originalimg.style.width = imgbox.offsetWidth + "px";
imgbox.onmousemove = function (e) {
  let boxwidth = e.pageX - leftspace + "px";
  imgwrap.style.width = boxwidth;
  line.style.left = boxwidth;
};
