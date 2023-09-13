let numberofButtons = document.querySelectorAll(".button");
for(var j=0;j<numberofButtons;j++){
    document.querySelectorAll(".button")[j].addEventListener("click",function(){
        var buttonStyle=this.innerHTML;
        sound(buttonStyle);
        animation(buttonStyle);
    });
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    animation(event.key);
});
function sound(key){
    switch(key){
        case "w":
            var sound1=new Audio("music/w.mp3");
            sound1.play();
            break;
        case "a":
            var sound2=new Audio("a.mp3");
            sound2.play();
            break;
        case "s":
            var sound3=new Audio("music/s.mp3");
            sound3.play();
            break;
        case "d":
            var sound4=new Audio("d.mp3");
            sound4.play();
            break;
        case "f":
            var sound5=new Audio("f.mp3");
            sound5.play();
            break;
        case "j":
            var sound5= new Audio("j.mp3");
            break;
        case "k":
            var sound5= new Audio("k.mp3");
            break;
        case "l":
            var sound5= new Audio("l.mp3");
            break;
        default:
            console.log(key);
    }
}
function animation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("animation");
    setTimeout(function(){
        activeButton.classList.remove("animation");
    },100);
}