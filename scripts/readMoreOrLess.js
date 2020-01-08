function readMoreOrLess(myLess, myMore, btnName) {
  var dots = document.getElementById(myLess);
  var moreText = document.getElementById(myMore);
  var btnText = document.getElementById(btnName);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less";
    moreText.style.display = "inline";
  }
}
