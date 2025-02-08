document.querySelector('#check-fitting').addEventListener('click', function(e) {
  const options = ["It fits perfectly!", "It's a bit tight", "It's a bit loose", "It's too tight", "It's too loose"];
  const fittingText = document.getElementById("fitting-text");
  const option = options[Math.floor(Math.random() * options.length)];
  fittingText.innerHTML = option;
});

document.querySelector('#fitting').addEventListener('click', function(e) {
  const popover = document.getElementById("fitting");
  popover.hidePopover();
});
