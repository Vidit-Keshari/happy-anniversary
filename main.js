var tint_color = "";
var del = "Making Vidit operator of lapata smp- C:/users/nizgamer/.minecraft/saves/multiplayer/owned/servers/lapatasmp/operators/-->>>del?=lapataoperator.txt";
var mak = "Making Vidit operator of lapata smp- C:/users/nizgamer/.minecraft/saves/multiplayer/owned/servers/lapatasmp/operators/-->>>create?=new.txt.insert='New lapata operator==viditheromax7/TL/cracked'";
var easterEgg_cancle = false;

document.addEventListener('DOMContentLoaded', function () {
    console.log("Type easterEgg in tint text box");
});

window.onload = function () {
    var i = 0;

    function easterEgg() {
        console.log("Type easterEgg in the text box");
    }

    function performEasterEgg() {
        easterEgg();
        if (i++ < 776) {
            setTimeout(performEasterEgg, 1);
        }
        if (i == 777) {
            console.error("Could't find response by the user");
            easterEgg_cancle = true;
        }
    }

    performEasterEgg();
};


function preload() {

}

function setup() {
    canvas = createCanvas(700, 470);
    canvas.position(345, 250);
    video = createCapture(VIDEO)
    video.size(700, 470);
    video.hide();
}

function draw() {
    image(video, 0, 0, 700, 470);
    tint(tint_color);
    //Photo-frame code PT-1 --->>
    stroke("navy");
    strokeWeight(5);
    fill("blue");
    rect(0, 0, 30, 470);
    rect(670, 0, 30, 470);
    rect(0, 440, 700, 30);
    rect(0, 0, 700, 30);
    noStroke();
    noFill();
    //Photo-frame code PT-1 finished
    //Photo-frame code PT-2(final) --->>
    stroke("darkred");
    strokeWeight(3);
    fill("red");
    circle(20, 20, 50);
    circle(680, 20, 50);
    circle(20, 450, 50);
    circle(680, 450, 50);
    noFill();
    noStroke();
    //Photo-frame code PT-2(final) finshied
}

function abTint() {
    window.alert("A feature to color webcam frame into desired color");
}

function tint_it() {
    tint_color = document.getElementById("setColor").value;
    if (document.getElementById("setColor").value == 'white(current)') {
        tint_color = "white";
        document.getElementById("setColor").value = "white";
        setTimeout(timer2, 3000);
    } else if (document.getElementById("setColor").value == 'peach') {
        tint_color = "pink";
        document.getElementById("note").innerHTML = "Peach isn't supported";
        document.getElementById("setColor").value = "pink";
        setTimeout(timer2, 3000);
    } else if (document.getElementById("setColor").value == 'black') {
        tint_color = "gray";
        document.getElementById("note").innerHTML = "black isn't support becuse it changes frame to complete dark";
        document.getElementById("setColor").value = "gray";
        setTimeout(timer2, 3000);
    } else if (document.getElementById("setColor").value == 'deepskyblue') {
        tint_color = "darkred";
        document.getElementById("note").innerHTML = "this color can only be achived using a secret code";
        document.getElementById("setColor").value = "hint:console; color darkred is set";
        setTimeout(timer2, 3000);
    } else if (document.getElementById("setColor").value == "") {
        document.getElementById("setColor").style.color = "red";
        document.getElementById("setColor").value = "Please enter a color";
        setTimeout(timer, 1000);
    } else if ((document.getElementById("setColor").value == 'easterEgg') && (easterEgg_cancle == false)) {
        tint_color = "deepskyblue";
        document.getElementById("note").innerHTML = "deepskyblue color activated";
        setTimeout(timer2, 3000);
        operatordel();
        operatormak();
    } else if ((document.getElementById("setColor").value == 'easterEgg') && (easterEgg_cancle == true)) {
        console.error("sorry easterEgg has been cancled due to late response(timed out) please refresh the page to reset the timer, timer is shown console(timer max==777+1)");
        tint_color = "white";
        document.getElementById("setColor").value = "white";
    } else if (document.getElementById("setColor").value == "Please enter a color") {
        document.getElementById("setColor").style.color = "red";
        document.getElementById("setColor").value = "Please enter a color";
        setTimeout(timer, 1000);
    } else if(document.getElementById("setColor").value == "Color set") {
        document.getElementById("setColor").style.color = "red";
        document.getElementById("setColor").value = "Please enter a color";
        setTimeout(timer, 1000);
    } else {
        document.getElementById("setColor").style.color = "green";
        document.getElementById("setColor").value = "Color set!";
        setTimeout(timer, 1000);
    }
}

function snap() {
    save('Happy Wedding Aniversry Dear Mummy Papa.png');
}
function operatordel() {
    console.log(del);
}

function operatormak() {
    console.log(mak);
}

function timer() {
    document.getElementById("setColor").value = "";
    document.getElementById("setColor").style.color = "black";
}

function timer2() {
    document.getElementById("note").innerHTML = "";
}