let flipcardsButton = document.getElementById("flipcardsButton");
let closeButtonFlipcards = document.getElementById("close-window-flipcards");
let dencryptButton = document.getElementById("dencryptButton");
let closeButtonDencrypt = document.getElementById("close-window-dencrypt");

flipcardsButton.addEventListener('click', function() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonFlipcards.addEventListener('click', function() {
    document.getElementById("flipcards").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

dencryptButton.addEventListener('click', function() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonDencrypt.addEventListener('click', function() {
    document.getElementById("dencrypt").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});


