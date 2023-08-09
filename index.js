var numberOfButtons = document.querySelectorAll(".drum").length;
// ading event listeners to all buttons through looping.

for(var i =0; i< numberOfButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        // Incase a Button is pressed.
        makeSound(this.innerHTML);
        makeAnimation(this.innerHTML);
    });
    
}
//Incase a keyboard key is pressed:
//here event listener is added to the entire document in case of detecting a keyboard press
document.addEventListener("keydown",function(event){
        makeSound(event.key);
        makeAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("./sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("./sounds/snare.mp3");
            audio3.play();
            break;
        case "d":
            var audio4 = new Audio("./sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("./sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("./sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio7 = new Audio("./sounds/tom-4.mp3");
            audio7.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }
}

function makeAnimation(x){
    var activeButton = document.querySelector("."+x);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    //time in milliseconds.
}