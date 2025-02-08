document.querySelector('#check-fitting').addEventListener('click', function(e) {
  const options = ["It fits perfectly!", "It may be a bit tight<br>Try a larger size", "It may be a bit loose<br>Try a smaller size"];
  const fittingText = document.getElementById("fitting-text");
  const option = options[Math.floor(Math.random() * options.length)];
  fittingText.innerHTML = option;
});

document.querySelector('#fitting').addEventListener('click', function(e) {
  const popover = document.getElementById("fitting");
  popover.hidePopover();
});
