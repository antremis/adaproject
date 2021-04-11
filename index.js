function expandWindow(){
    document.getElementById("btnStart").style.transitionDuration = "2s"
    var windowHeight = document.getElementById("main-program").clientHeight
    document.getElementById("btnStart").style.opacity = 0;
    var increaseWindow = setInterval(function() {
        if(windowHeight >= (window.innerHeight)*0.8){
            windowHeight = (window.innerHeight)*0.8;
            document.getElementById("main-program").style.height = windowHeight + "px";
            clearInterval(increaseWindow);
        }
        else{
            windowHeight += 20;
            window.scrollY += 20;
            document.getElementById("main-program").style.height = windowHeight + "px";
        }
    }, 20);
    window.setTimeout(function() {
        document.getElementById("btnStart").style.display = "none";
    }, 2000);
}

function test(){

    document.querySelector("#btnStart").style.transitionDuration = "2s";
    // var temp = window.getComputedStyle(x).getPropertyValue("opacity");
    // console.log(temp);
}

document.getElementById("btnStart").onclick = expandWindow;