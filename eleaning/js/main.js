window.addEventListener("load", function () {
  truncateCardTitle();
});
function truncateCardTitle() {
  var cardList = document.getElementsByClassName("card-title");
  console.log(cardList);
  for (var i = 0; i < cardList.length; i++) {
    var text = cardList[i].innerHTML;
    var newText = trancateString(text, 40);
    cardList[i].innerHTML = newText;
  }
}
function trancateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
