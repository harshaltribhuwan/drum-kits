var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

    switch (key) {
            
        case "q":
        var kick = new Audio("sounds/kick.wav");
        kick.play()
        break;

        case "w":
        var snare = new Audio("sounds/snare.wav");
        snare.play()
        break;

        case "e":
        var tom1 = new Audio("sounds/clap.wav");
        tom1.play()
        break;

        case "r":
        var tom2 = new Audio("sounds/rim.wav");
        tom2.play()
        break;

        case "t":
        var tom3 = new Audio("sounds/hit.wav");
        tom3.play()
        break;

        case "y":
        var tom4 = new Audio("sounds/hat.wav");
        tom4.play()
        break;

        case "u":
        var crash = new Audio("sounds/crash.wav");
        crash.play()
        break;

        default: console.log(key);
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }