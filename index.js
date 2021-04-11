function min(a, b){
    if(a < b){
        return a;
    }
    else{
        return b;
    }
}

function expandWindow(){
    document.getElementById("btnStart").style.transitionDuration = "2s";
    document.getElementById("btnStart").style.opacity = 0;
    document.getElementById("btnStart").style.fontSize = 0;
    document.getElementById("main-program").style.borderTop = "2px solid black";
    expandWindowWidth()
    window.setTimeout(expandWindowHeight, 2000)
}

function expandWindowWidth(){
    var windowWidth = document.getElementById("main-program").clientWidth;
    var increaseWindow = setInterval(function() {
        if(windowWidth >= min((window.innerWidth)*0.9, 1200)){
            windowWidth = min((window.innerWidth)*0.9, 1200);
            document.getElementById("main-program").style.width = windowWidth + "px";
            clearInterval(increaseWindow);
        }
        else{
            windowWidth += 5;
            document.getElementById("main-program").style.width = windowWidth + "px";
        }
    }, 10);
    window.setTimeout(function() {
        document.getElementById("btnStart").style.display = "none";
    }, 2000);
}

function expandWindowHeight(){
    var windowHeight = document.getElementById("main-program").clientHeight
    document.getElementById("main-program").style.borderLeft = "2px solid black";
    document.getElementById("main-program").style.borderRight = "2px solid black";
    window.setTimeout(function(){
        document.getElementById("main-program").style.borderBottom = "2px solid black";
    }, 2200)
    var increaseWindow = setInterval(function() {
        if(windowHeight >= (window.innerHeight)*0.8){
            windowHeight = (window.innerHeight)*0.8;
            document.getElementById("main-program").style.height = windowHeight + "px";
            clearInterval(increaseWindow);
        }
        else{
            windowHeight += 20;
            document.getElementById("main-program").style.height = windowHeight + "px";
        }
    }, 20);
}

function test(){

    document.querySelector("#btnStart").style.transitionDuration = "2s";
    // var temp = window.getComputedStyle(x).getPropertyValue("opacity");
    // console.log(temp);
}

document.getElementById("btnStart").onclick = expandWindow;