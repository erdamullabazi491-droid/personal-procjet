var butoni1 = document.getElementById("btn1");

butoni1.onclick = function(){
    aleart("you clicked the button!")
}

var butoni1 = document.querySelector("button");

butoni1.onclick = function(){
    aleart("hello");
}

butoni1.addEventListener("click", function(){
    alert("hello");
})

ourElement,addEventListener("click", funksioni1);
ourElement.addEventListener("click", funksioni2);

var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");

button2.onmouseover = function(){
    alert("hello");
}

button3.onmouseleave = function(){
    alert("goodbye");
}

button2.onmousewheel = function(){
    alert("rotate");
}

var v_button = document.getElementById("btn1");
v_button.onclick = function(){
    v_text.style.color= "pink";
   v_text.style.backgroundColor = "lightgrey";
   v_text.style.textAlign = "Center";
   v_text.style.fontsize = "100px"
   v_text.style.padding = "20px";
}

v_text.onmouseover = function(){
    v_text.style.csstext
}

