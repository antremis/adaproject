function max(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

function knapsack(n, weights, values, capacity){
    var dp = new Array(n+1);
    for(var i = 0; i < n+1; i++){
        dp[i] = new Array(capacity+1);
        dp[i].fill(0);
    }
    for(var i = 1; i < n+1; i++){
        for(var j = 1; j < capacity+1; j++){
            if(weights[i-1] <= j){
                dp[i][j] = max(dp[i-1][j], values[i-1] + dp[i-1][j-weights[i-1]]);
            }
            else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    displayDpOntoHTML(dp, n, capacity);
    return dp[n][capacity];
}

function displayDpOntoHTML(dp, n, capacity){    

    var parent = document.getElementById("tableDiv");
    if(document.getElementById("table")){
        parent.removeChild(document.getElementById("table"));
    }
    
    var table = document.createElement("table");
    for(var i = 0; i < n+1; i++){
        var row = document.createElement("tr");
        for(var j = 0; j < capacity+1; j++){
            var cell = document.createElement("td");
            var data = document.createTextNode(dp[i][j]);
            cell.appendChild(data);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    table.id = "table";
    
    parent.style.opacity = 0;
    setTimeout(function(){
        parent.appendChild(table);
    }, 1000)
    setTimeout(function(){
        parent.style.opacity = 1;
    }, 1000)
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
        if(windowWidth >= (window.innerWidth)*0.9){
            document.getElementById("main-program").style.width = "90vw";
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
    var windowHeight = document.getElementById("main-program").clientHeight;
    document.getElementById("main-program").style.borderLeft = "2px solid black";
    document.getElementById("main-program").style.borderRight = "2px solid black";
    window.setTimeout(function(){
        document.getElementById("main-program").style.borderBottom = "2px solid black";
    }, 2200)
    var increaseWindow = setInterval(function() {
        if(windowHeight >= (window.innerHeight)*0.8){
            document.getElementById("main-program").style.height = "80vh";
            clearInterval(increaseWindow);
        }
        else{
            windowHeight += 20;
            document.getElementById("main-program").style.height = windowHeight + "px";
        }
    }, 20);
    window.setTimeout(function() {
        document.getElementById("top").style.opacity = "0";
        document.getElementById("bottom").style.opacity = "0";
       document.getElementById("top").style.display = "flex";
       document.getElementById("bottom").style.display = "flex";
    }, 3000);
    window.setTimeout(function() {
        document.getElementById("top").style.opacity = "1";
        document.getElementById("bottom").style.opacity = "1";
     }, 3500);
}

function validate(n, weights, values, capacity){
    if(n && weights && values && capacity){
        return true;
    }
    return false;
}

function getAnswer(){
    var n = document.getElementById("numOfItems").value;
    var weights = document.getElementById("weightOfItems").value;
    var values = document.getElementById("valueOfItems").value;
    var capacity = document.getElementById("capacity").value;

    if(validate(n, weights, values, capacity)){
        n = parseInt(n);
        capacity = parseInt(capacity);
        weights = weights.split(" ");
        for(var i = 0; i < n; i++){
            weights[i] = parseInt(weights[i]);
        }
        values = values.split(" ");
        for(var i = 0; i < n; i++){
            values[i] = parseInt(values[i]);
        }
        var result = knapsack(n, weights, values, capacity);
    
        var ans = document.getElementById("ans");
        ans.style.fontSize = "0rem";
        setTimeout(function(){
            ans.innerHTML = result;
        }, 1000)
        setTimeout(function(){
            ans.style.fontSize = "min(10vh, 8vw)";
        }, 1000)
    }
    else{
        var ans = document.getElementById("ans");
        ans.style.fontSize = "0rem";
        setTimeout(function(){
            ans.innerHTML = "Please Enter<br>All Fields";
        }, 1000)
        setTimeout(function(){
            ans.style.fontSize = "min(10vh, 4vw)";
        }, 1000)
    }
}

function test(){
    alert("works");
}

document.getElementById("btnStart").onclick = expandWindow;
document.getElementById("ans").onclick = getAnswer;

document.getElementById("numOfItems").onmouseenter = function(){
    document.getElementById("numOfItems").setAttribute('placeholder', "");
};
document.getElementById("numOfItems").onmouseleave = function(){
    document.getElementById("numOfItems").setAttribute('placeholder', "Enter Number Of Items");
};

document.getElementById("weightOfItems").onmouseenter = function(){
    document.getElementById("weightOfItems").setAttribute('placeholder', "");
};
document.getElementById("weightOfItems").onmouseleave = function(){
    document.getElementById("weightOfItems").setAttribute('placeholder', "Enter Weights Of Items");
};

document.getElementById("capacity").onmouseenter = function(){
    document.getElementById("capacity").setAttribute('placeholder', "");
};
document.getElementById("capacity").onmouseleave = function(){
    document.getElementById("capacity").setAttribute('placeholder', "Enter Knapsack Capacity");
};

document.getElementById("valueOfItems").onmouseenter = function(){
    document.getElementById("valueOfItems").setAttribute('placeholder', "");
};
document.getElementById("valueOfItems").onmouseleave = function(){
    document.getElementById("valueOfItems").setAttribute('placeholder', "Enter Values Of Items");
};
