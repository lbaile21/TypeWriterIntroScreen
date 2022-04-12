var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var txt = '> Our clinical trials did not go as planned...'; /* The text */
var txt2 = '> patients are reacting extremely aggressively';
var txt3 = '> two patients have overpowered our guards and escaped...';
var txt4 = '> it is clear that we cannot contain the spread of this disease';
var txt5 = '> may God have mercy on our souls.';
var speed = 140; /* The speed/duration of the effect in milliseconds */
var wait = 1000; // The wait time between lines of code

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("first").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    else if (i == txt.length) {
        setTimeout(typeWriter2, wait);
    }
}

function typeWriter2() {
    if (j==0) removeElement("first");
    if (j < txt2.length) {
        document.getElementById("second").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
    else if (j == txt2.length) {
        setTimeout(typeWriter3, wait);
    }
}

function typeWriter3() {
    if (k == 0) removeElement("second"); 
    if (k < txt3.length) {
        document.getElementById("third").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
    else if (k == txt3.length) {
        setTimeout(typeWriter4, wait);
    }
}

function typeWriter4() {
    if (l==0) removeElement("third")
    if (l < txt4.length) {
        document.getElementById("fourth").innerHTML += txt4.charAt(l);
        l++;
        setTimeout(typeWriter4, speed);
    }
    else if (l == txt4.length) {
        setTimeout(typeWriter5, wait);
    }
}

function typeWriter5() {
    if (m==0) removeElement("fourth");
    if (m < txt5.length) {
        document.getElementById("fith").innerHTML += txt5.charAt(m);
        m++;
        setTimeout(typeWriter5, speed);
    }
    else if (m == txt5.length) {
        setTimeout(wait);
        console.log("done");
    }
}

function removeStart() {
    const element = document.getElementById("start");
    element.remove();
    typeWriter();
}

function removeElement(ele) {
    const element = document.getElementById(ele);
    element.remove();
}

keydown = function(e){
    if(e.keyCode==13)
      document.getElementsByTagName("button")[0].click()
   }
document.onkeydown = keydown

function sayHello() {
    console.log("hello Logan");
}
