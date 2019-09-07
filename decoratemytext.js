window.onload = function(){
var button = document.getElementById("button");
button.onclick = makelargerwithtimer;
var checkbox = document.getElementById("checkbox");
checkbox.onchange = changestyle;
var malkovitch = document.getElementById("malkovitch");
malkovitch.onclick = malkochange;
}

function hello(){
    alert("Hello World");
}

function makelarger(){
    var size = parseInt(document.getElementById("textarea").style.fontSize);
    size = size + 2;
    document.getElementById("textarea").style.fontSize = size + "pt";
}

function changestyle(){
    let att = document.getElementById("textarea");
    let body = document.getElementById("body");
    if(att.style.fontWeight != "bold"){
          att.style.fontWeight = "bold";
          att.style.color = "green";
          att.style.textDecoration = "underline";
          body.style.backgroundImage = "url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)"
    }
    else{
        att.style.fontWeight = "normal";
        att.style.color = "black";
        att.style.textDecoration = "none";
        body.style.backgroundImage = "none"
    }
}

function makelargerwithtimer(){
    timer = setInterval(makelarger,500);
}

function malkochange(){
    let text = document.getElementById("textarea").value;
    if(text.length >= 5){
        document.getElementById("textarea").value = "Malkovitch";
    }else{
        console.log("No");
    }
}