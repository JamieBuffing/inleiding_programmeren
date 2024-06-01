//Een lange lijst met constanten om alle opties weer te geven in de selectie lijst
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

//De knoppen om het budget aan te passen
const knop1 = document.querySelector("budgeto1");
const knop2 = document.querySelector("budgeto2");
const knop3 = document.querySelector("budgeto3");
const knop4 = document.querySelector("budgeto4");

//De plekken waar tekst aangepast gaat worden
const budget = document.querySelector("#budget");
const melding = document.querySelector("#melding");

//audio const
const audio = document.getElementById("mijnAudio");

//let waardes
/*op volgorde:
het startbedrag
de kosten van lijst 1
de kosten van lijst 2
de kosten van lijst 3
de kosten van lijst 4
de kosten van lijst 5
de totale kosten van de lijsten
en als laatst
het startbedrag - de totale kosten*/
let startb = 1000;
let l1_waarde = 0;
let l2_waarde = 0;
let l3_waarde = 0;
let l4_waarde = 0;
let l5_waarde = 0;
let totaal_kosten = 0;
let budget1 = 0;

//De sluitknop van de schulden popup
document.getElementById("sluitknop").onclick = function() {close1()};
//De bijbehoorende functies van de budget knoppen
document.getElementById("budgeto1").onclick = function() {optie1()};
document.getElementById("budgeto2").onclick = function() {optie2()};
document.getElementById("budgeto3").onclick = function() {optie3()};
document.getElementById("budgeto4").onclick = function() {optie4()};
//De functie die de naam uit het input veld haalt en invult in de pagina titel en op verschillende andere plekken
function zoekWaarde() {
    let inputField = document.getElementById("voornaam");
    let value = inputField.value;
    document.title = value;
    document.querySelector("#naam1").innerHTML = "De auto van: " + value;
    document.querySelector("#naam2").innerHTML = "De auto van: " + value;
    document.getElementById("melding").textContent = "De pagina titel is nu aangepast";
    document.getElementById("meldingen").style.backgroundColor = "#cecec7";
    close2();
    setTimeout (clear,3000);
}
//De functie die de melding tekst hersteld naar normaal
function clear (){
    document.getElementById("melding").textContent = "meldingen...";
    document.getElementById("meldingen").style.backgroundColor = "#F2F2F0";
}
//Hieronder de 4 budget opties
function optie1 () {
    document.getElementById("budgeto1").style.borderColor = "cadetblue";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 500;
    document.getElementById("printBudget").textContent = "Deze auto is ontworpen met maar €" + startb + ",-";
    document.getElementById("melding").textContent = "Uw nieuwe budget is €" + startb + ",-";
    document.getElementById("meldingen").style.backgroundColor = "#cecec7";
    update_tk();
    setTimeout (clear,3000);
}
function optie2 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "cadetblue";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 1000;
    document.getElementById("printBudget").textContent = "Deze auto is ontworpen met maar €" + startb + ",-";
    document.getElementById("melding").textContent = "Uw nieuwe budget is €" + startb + ",-";
    document.getElementById("meldingen").style.backgroundColor = "#cecec7";
    update_tk();
    setTimeout (clear,3000);
}
function optie3 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "cadetblue";
    document.getElementById("budgeto4").style.borderColor = "black";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 1500;
    document.getElementById("printBudget").textContent = "Deze auto is ontworpen met maar €" + startb + ",-";
    document.getElementById("melding").textContent = "Uw nieuwe budget is €" + startb + ",-";
    document.getElementById("meldingen").style.backgroundColor = "#cecec7";
    update_tk();
    setTimeout (clear,3000);
}
function optie4 () {
    document.getElementById("budgeto1").style.borderColor = "black";
    document.getElementById("budgeto2").style.borderColor = "black";
    document.getElementById("budgeto3").style.borderColor = "black";
    document.getElementById("budgeto4").style.borderColor = "cadetblue";
    startb = Number(startb) - Number(startb);
    startb = Number(startb) + 2000;
    document.getElementById("printBudget").textContent = "Deze auto is ontworpen met maar €" + startb + ",-";
    document.getElementById("melding").textContent = "Uw nieuwe budget is €" + startb + ",-";
    document.getElementById("meldingen").style.backgroundColor = "#cecec7";
    update_tk();
    setTimeout (clear,3000);
}
//De if else statement voor mijn budget functie, als je onder de nul komt moet er wat gebeuren
function geldCheck () {
    if (budget1 < 0) {
        console.clear();
        console.log("Budget - 👎");
        budget.textContent = "Das pech geld weg (€" + budget1 + ",-)";
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
        console.log("Budget + 👍");
        document.body.style.backgroundColor = "#F2F2F0";
        document.getElementById("info").style.color = "black";
        document.getElementById("info").style.borderColor = "black";
        document.getElementById("meldingen").style.color = "black";
        document.getElementById("meldingen").style.borderColor = "black";
        document.getElementById("options").style.color = "black";
        document.getElementById("options").style.borderColor = "black";
    }
}
//De functies de de popups sluiten en in sommige gevallen de volgende popup openen.
function close1 () {
    element = document.querySelector("#popup1");
    element.style.visibility = "hidden";       
}
function close2 () {
    element2 = document.querySelector("#popup2");
    element3 = document.querySelector("#popup3");
    element2.style.visibility = "hidden";
    element3.style.visibility = "visible";       
}
function close3 () {
    element3 = document.querySelector("#popup3");
    element4 = document.querySelector("#popup4");
    element3.style.visibility = "hidden";
    element4.style.visibility = "visible";       
}
function close4 () {
    element4 = document.querySelector("#popup4");
    element5 = document.querySelector("#popup5");
    element4.style.visibility = "hidden";
    element5.style.visibility = "visible";       
}
function close5 () {
    element5 = document.querySelector("#popup5");
    element5.style.visibility = "hidden";       
}
//De functie om de totale kosten te updaten en je saldo weer te geven.
function update_tk () {
    totaal_kosten = Number(l1_waarde) + Number(l2_waarde) + Number(l3_waarde) + Number(l4_waarde) + Number(l5_waarde);
    budget1 = Number(startb) - Number(totaal_kosten);
    budget.textContent = "U heeft nog €" + budget1 + ",-";
    document.getElementById("naam3").textContent = "€" + budget1 + ",-";
    geldCheck ();
}
//De functies om de lijsten te updaten
function l1 (value) {
    console.log ("list 1 changed");
    l1_waarde = Number(l1_waarde) - Number(l1_waarde);
    l1_waarde = (l1_waarde) + (value);
    update_tk();
}
function l2 (value) {
    console.log ("list 2 changed");
    l2_waarde = Number(l2_waarde) - Number(l2_waarde);
    l2_waarde = (l2_waarde) + (value);
    update_tk();
}
function l3 (value) {
    console.log ("list 3 changed");
    l3_waarde = Number(l3_waarde) - Number(l3_waarde);
    l3_waarde = (l3_waarde) + (value);
    update_tk();
}
function l4 (value) {
    console.log ("list 4 changed");
    l4_waarde = Number(l4_waarde) - Number(l4_waarde);
    l4_waarde = (l4_waarde) + (value);
    update_tk();
}
function l5 (value) {
    console.log ("list 5 changed");
    l5_waarde = Number(l5_waarde) - Number(l5_waarde);
    l5_waarde = (l5_waarde) + (value);
    update_tk();
}

//Hieronder alle functies van de selectie opties
//Hier worden de afbeeldingen veranderd en de kosten doorgevoerd naar de lijst update functies
function f1_0 () {
    l1 (0);
    document.getElementById("auto").src="images/1_1.png";
}
function f1_1 () {
    l1 (100);
    document.getElementById("auto").src="images/1_2.png";
}
function f1_2 () {
    l1 (200);
    document.getElementById("auto").src="images/1_3.png";
}
function f1_3 () {
    l1 (300);
    document.getElementById("auto").src="images/1_4.png";
}
function f1_4 () {
    l1 (400);
    document.getElementById("auto").src="images/1_5.png";
}
function f1_5 () {
    l1 (500);
    document.getElementById("auto").src="images/1_6.png";
}

function f2_0 () {
    l2 (0);
    document.getElementById("auto1").src="images/2_1.png";
}
function f2_1 () {
    l2 (100);
    document.getElementById("auto1").src="images/2_2.png";
}
function f2_2 () {
    l2 (200);
    document.getElementById("auto1").src="images/2_3.png";
}
function f2_3 () {
    l2 (300);
    document.getElementById("auto1").src="images/2_4.png";
}
function f2_4 () {
    l2 (400);
    document.getElementById("auto1").src="images/2_5.png";
}
function f2_5 () {
    l2 (500);
    document.getElementById("auto1").src="images/2_6.png";
}

function f3_0 () {
    l3 (0);
    document.getElementById("auto2").src="images/3_1.png";
}
function f3_1 () {
    l3 (100);
    document.getElementById("auto2").src="images/3_2.png";
}
function f3_2 () {
    l3 (200);
    document.getElementById("auto2").src="images/3_3.png";
}
function f3_3 () {
    l3 (300);
    document.getElementById("auto2").src="images/3_4.png";
}
function f3_4 () {
    l3 (400);
    document.getElementById("auto2").src="images/3_5.png";
}
function f3_5 () {
    l3 (500);
    document.getElementById("auto2").src="images/3_6.png";
}

function f4_0 () {
    l4 (0);
    document.getElementById("auto3").src="images/4_1.png";
}
function f4_1 () {
    l4 (100);
    document.getElementById("auto3").src="images/4_2.png";
}
function f4_2 () {
    l4 (200);
    document.getElementById("auto3").src="images/4_3.png";
}
function f4_3 () {
    l4 (300);
    document.getElementById("auto3").src="images/4_4.png";
}
function f4_4 () {
    l4 (400);
    document.getElementById("auto3").src="images/4_5.png";
}
function f4_5 () {
    l4 (500);
    document.getElementById("auto3").src="images/4_6.png";
}

function f5_0 () {
    l5 (0);
    document.getElementById("auto4").src="images/y.png";
}
function f5_1 () {
    l5 (100);
    document.getElementById("auto4").src="images/z.png";
}
function f5_2 () {
    l5 (200);
    document.getElementById("auto4").src="images/a1.png";
}
function f5_3 () {
    l5 (300);
    document.getElementById("auto4").src="images/b1.png";
}
function f5_4 () {
    l5 (400);
    document.getElementById("auto4").src="images/c1.png";
}
function f5_5 () {
    l5 (500);
    document.getElementById("auto4").src="images/d1.png";
}

//de functie voor de toeter als je op print hebt geklikt
function playAudio() { 
    audio.play();
} 

//Hieronder alle evenlistners
l1_0.addEventListener("click", f1_0);
l1_1.addEventListener("click", f1_1);
l1_2.addEventListener("click", f1_2);
l1_3.addEventListener("click", f1_3);
l1_4.addEventListener("click", f1_4);
l1_5.addEventListener("click", f1_5);

l2_0.addEventListener("click", f2_0);
l2_1.addEventListener("click", f2_1);
l2_2.addEventListener("click", f2_2);
l2_3.addEventListener("click", f2_3);
l2_4.addEventListener("click", f2_4);
l2_5.addEventListener("click", f2_5);

l3_0.addEventListener("click", f3_0);
l3_1.addEventListener("click", f3_1);
l3_2.addEventListener("click", f3_2);
l3_3.addEventListener("click", f3_3);
l3_4.addEventListener("click", f3_4);
l3_5.addEventListener("click", f3_5);

l4_0.addEventListener("click", f4_0);
l4_1.addEventListener("click", f4_1);
l4_2.addEventListener("click", f4_2);
l4_3.addEventListener("click", f4_3);
l4_4.addEventListener("click", f4_4);
l4_5.addEventListener("click", f4_5);

l5_0.addEventListener("click", f5_0);
l5_1.addEventListener("click", f5_1);
l5_2.addEventListener("click", f5_2);
l5_3.addEventListener("click", f5_3);
l5_4.addEventListener("click", f5_4);
l5_5.addEventListener("click", f5_5);