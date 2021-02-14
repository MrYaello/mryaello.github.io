let flipcardsButton = document.getElementById("flipcardsButton");
let closeButtonFlipcards = document.getElementById("close-window-flipcards");
let dencryptButton = document.getElementById("dencryptButton");
let closeButtonDencrypt = document.getElementById("close-window-dencrypt")
let coffemachineButton = document.getElementById("coffemachineButton");
let closeButtonCoffemachine = document.getElementById("close-window-coffemachine");
/*
let javafyButton = document.getElementById("javafyButton");
let closeButtonJavafy = document.getElementById("close-window-javafy");
*/


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

coffemachineButton.addEventListener('click', function() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonCoffemachine.addEventListener('click', function() {
    document.getElementById("coffemachine").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

/*
javafyButton.addEventListener('click', function() {
    document.getElementById("javafy").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});

closeButtonJavafy.addEventListener('click', function() {
    document.getElementById("javafy").classList.toggle("visible");
    document.getElementById("overlay").classList.toggle("visible");
    document.getElementById("body").classList.toggle("modal-open");
});
*/


