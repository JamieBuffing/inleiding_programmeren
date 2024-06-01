const l1_0 = document.querySelector("#L1_0");
const l1_1 = document.querySelector("#L1_1");
const l1_2 = document.querySelector("#L1_2");
const l1_3 = document.querySelector("#L1_3");
const l1_4 = document.querySelector("#L1_4");
const l1_5 = document.querySelector("#L1_5");

const l2_0 = document.querySelector("#L2_0");
const l2_1 = document.querySelector("#L2_1");
const l2_2 = document.querySelector("#L2_2");
const l2_3 = document.querySelector("#L2_3");
const l2_4 = document.querySelector("#L2_4");
const l2_5 = document.querySelector("#L2_5");

const l3_0 = document.querySelector("#L3_0");
const l3_1 = document.querySelector("#L3_1");
const l3_2 = document.querySelector("#L3_2");
const l3_3 = document.querySelector("#L3_3");
const l3_4 = document.querySelector("#L3_4");
const l3_5 = document.querySelector("#L3_5");

const l4_0 = document.querySelector("#L4_0");
const l4_1 = document.querySelector("#L4_1");
const l4_2 = document.querySelector("#L4_2");
const l4_3 = document.querySelector("#L4_3");
const l4_4 = document.querySelector("#L4_4");
const l4_5 = document.querySelector("#L4_5");

const l5_0 = document.querySelector("#L5_0");
const l5_1 = document.querySelector("#L5_1");
const l5_2 = document.querySelector("#L5_2");
const l5_3 = document.querySelector("#L5_3");
const l5_4 = document.querySelector("#L5_4");
const l5_5 = document.querySelector("#L5_5");

const knop1 = document.querySelector("budgeto1");
const knop2 = document.querySelector("budgeto2");
const knop3 = document.querySelector("budgeto3");
const knop4 = document.querySelector("budgeto4");

const budget = document.querySelector("#budget")

let startb = 1000;
let l1_waarde = 0;
let l2_waarde = 0;
let l3_waarde = 0;
let l4_waarde = 0;
let l5_waarde = 0;
let totaal_kosten = 0;
let budget1 = 0;
let i = 10;

document.getElementById("sluitknop").onclick = function() {close1()};

document.getElementById("budgeto1").onclick = function() {optie1()};
document.getElementById("budgeto2").onclick = function() {optie2()};
document.getElementById("budgeto3").onclick = function() {optie3()};
document.getElementById("budgeto4").onclick = function() {optie4()};

function optie1 () {
    document.getElementById("budgeto1").style.borderColor = "cadetblue";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 500;
    document.getElementById("budget").textContent = "Uw budget €" + startb + ",-"
    setTimeout (update_tk,1000)
}
function optie2 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "cadetblue";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 1000;
    document.getElementById("budget").textContent = "Uw budget €" + startb + ",-"
    setTimeout (update_tk,1000)
}
function optie3 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "cadetblue";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 1500;
    document.getElementById("budget").textContent = "Uw budget €" + startb + ",-"
    setTimeout (update_tk,1000)
}
function optie4 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "cadetblue";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 2000;
    document.getElementById("budget").textContent = "Uw budget €" + startb + ",-"
    setTimeout (update_tk,1000)
}

function geldCheck () {
    if (budget1 < 0) {
        console.clear();
        console.log("Budget - 👎")
        budget.textContent = "Das pech geld weg (€" + budget1 + ",-)"
        element = document.querySelector("#popup1");
        element.style.visibility = "visible";
        document.body.style.backgroundColor = "#F69992";
        document.getElementById("info").style.color = "red";
        document.getElementById("info").style.borderColor = "red";
        document.getElementById("meldingen").style.color = "red";
        document.getElementById("meldingen").style.borderColor = "red";
        document.getElementById("options").style.color = "red";
        document.getElementById("options").style.borderColor = "red";
    } else {
        console.clear();
        console.log("Budget + 👍")
        document.body.style.backgroundColor = "#F2F2F0";
        document.getElementById("info").style.color = "black";
        document.getElementById("info").style.borderColor = "black";
        document.getElementById("meldingen").style.color = "black";
        document.getElementById("meldingen").style.borderColor = "black";
        document.getElementById("options").style.color = "black";
        document.getElementById("options").style.borderColor = "black";
    }
}
function close1 () {
    element = document.querySelector("#popup1");
    element.style.visibility = "hidden";       
}
function update_tk () {
    totaal_kosten = Number(l1_waarde) + Number(l2_waarde) + Number(l3_waarde) + Number(l4_waarde) + Number(l5_waarde);
    budget1 = Number(startb) - Number(totaal_kosten);
    budget.textContent = "U heeft nog €" + budget1 + ",-"
    geldCheck ();
}
function l1 (value) {
    console.log ("list 1 changed")
    l1_waarde = Number(l1_waarde) - Number(l1_waarde);
    l1_waarde = (l1_waarde) + (value);
    update_tk()
}
function l2 (value) {
    console.log ("list 2 changed")
    l2_waarde = Number(l2_waarde) - Number(l2_waarde);
    l2_waarde = (l2_waarde) + (value);
    update_tk()
}
function l3 (value) {
    console.log ("list 3 changed")
    l3_waarde = Number(l3_waarde) - Number(l3_waarde);
    l3_waarde = (l3_waarde) + (value);
    update_tk()
}
function l4 (value) {
    console.log ("list 4 changed")
    l4_waarde = Number(l4_waarde) - Number(l4_waarde);
    l4_waarde = (l4_waarde) + (value);
    update_tk()
}
function l5 (value) {
    console.log ("list 4 changed")
    l5_waarde = Number(l5_waarde) - Number(l5_waarde);
    l5_waarde = (l5_waarde) + (value);
    update_tk()
}
function f1_0 () {
    l1 (0)
    document.getElementById('auto').src='images/A.png'
}
function f1_1 () {
    l1 (100)
    document.getElementById('auto').src='images/B.png'
}
function f1_2 () {
    l1 (200)
    document.getElementById('auto').src='images/D.png'
}
function f1_3 () {
    l1 (300)
    document.getElementById('auto').src='images/D.png'
}
function f1_4 () {
    l1 (400)
    document.getElementById('auto').src='images/E.png'
}
function f1_5 () {
    l1 (500)
    document.getElementById('auto').src='images/F.png'
}

function f2_0 () {
    l2 (0)
    document.getElementById('auto1').src='images/g.png'
}
function f2_1 () {
    l2 (100)
    document.getElementById('auto1').src='images/H.png'
}
function f2_2 () {
    l2 (200)
    document.getElementById('auto1').src='images/I.png'
}
function f2_3 () {
    l2 (300)
    document.getElementById('auto1').src='images/J.png'
}
function f2_4 () {
    l2 (400)
    document.getElementById('auto1').src='images/Kpng'
}
function f2_5 () {
    l2 (500)
    document.getElementById('auto1').src='images/L.png'
}

function f3_0 () {
    l3 (0)
    document.getElementById('auto2').src='images/m.png'
}
function f3_1 () {
    l3 (100)
    document.getElementById('auto2').src='images/N.png'
}
function f3_2 () {
    l3 (200)
    document.getElementById('auto2').src='images/O.png'
}
function f3_3 () {
    l3 (300)
    document.getElementById('auto2').src='images/P.png'
}
function f3_4 () {
    l3 (400)
    document.getElementById('auto2').src='images/Q.png'
}
function f3_5 () {
    l3 (500)
    document.getElementById('auto2').src='images/R.png'
}

function f4_0 () {
    l4 (0)
    document.getElementById('auto3').src='images/s.png'
}
function f4_1 () {
    l4 (100)
    document.getElementById('auto3').src='images/T.png'
}
function f4_2 () {
    l4 (200)
    document.getElementById('auto3').src='images/u.png'
}
function f4_3 () {
    l4 (300)
    document.getElementById('auto3').src='images/V.png'
}
function f4_4 () {
    l4 (400)
    document.getElementById('auto3').src='images/W.png'
}
function f4_5 () {
    l4 (500)
    document.getElementById('auto3').src='images/X.png'
}

function f5_0 () {
    l5 (0)
    document.getElementById('auto4').src='images/y.png'
}
function f5_1 () {
    l5 (100)
    document.getElementById('auto4').src='images/z.png'
}
function f5_2 () {
    l5 (200)
    document.getElementById('auto4').src='images/a1.png'
}
function f5_3 () {
    l5 (300)
    document.getElementById('auto4').src='images/b1.png'
}
function f5_4 () {
    l5 (400)
    document.getElementById('auto4').src='images/c1.png'
}
function f5_5 () {
    l5 (500)
    document.getElementById('auto4').src='images/d1.png'
}
l1_0.addEventListener('click', f1_0)
l1_1.addEventListener('click', f1_1)
l1_2.addEventListener('click', f1_2)
l1_3.addEventListener('click', f1_3)
l1_4.addEventListener('click', f1_4)
l1_5.addEventListener('click', f1_5)

l2_0.addEventListener('click', f2_0)
l2_1.addEventListener('click', f2_1)
l2_2.addEventListener('click', f2_2)
l2_3.addEventListener('click', f2_3)
l2_4.addEventListener('click', f2_4)
l2_5.addEventListener('click', f2_5)

l3_0.addEventListener('click', f3_0)
l3_1.addEventListener('click', f3_1)
l3_2.addEventListener('click', f3_2)
l3_3.addEventListener('click', f3_3)
l3_4.addEventListener('click', f3_4)
l3_5.addEventListener('click', f3_5)

l4_0.addEventListener('click', f4_0)
l4_1.addEventListener('click', f4_1)
l4_2.addEventListener('click', f4_2)
l4_3.addEventListener('click', f4_3)
l4_4.addEventListener('click', f4_4)
l4_5.addEventListener('click', f4_5)

l5_0.addEventListener('click', f5_0)
l5_1.addEventListener('click', f5_1)
l5_2.addEventListener('click', f5_2)
l5_3.addEventListener('click', f5_3)
l5_4.addEventListener('click', f5_4)
l5_5.addEventListener('click', f5_5)
