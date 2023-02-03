/*
* File: app.js
* Author: Tóth Fedor László
* Copyright: 2023, Tóth Fedor László
* Group: Szoft I-2-E
* Date: 2023.02.03
* Github: https://github.com/TothFL/
* Licenc: GNU GPL
*/

let radiusR=document.querySelector("#sugarR")
let radiusr=document.querySelector("#sugarr");
let height=document.querySelector("#magassag");

const calcButton = document.querySelector("#szamitGomb");
const emptyButton = document.querySelector("#torolGomb");

const volume = document.querySelector("#terfogat");

calcButton.addEventListener('click', ()=>{
    radiusRKalk = Number(radiusR.value);
    radiusrKalk = Number(radiusr.value);
    heightKalk = Number(height.value);

    if(radiusRKalk==0||radiusrKalk==0||heightKalk==0){
        alert("Hibás adatok!")
    } else {
        volume.value=parseFloat(calcTerf(radiusRKalk, radiusrKalk, heightKalk)).toFixed(3);
    }
});

emptyButton.addEventListener('click', ()=>{
    //console.log("Teszt");
    radiusR.value=null;
    radiusr.value=null;
    height.value=null;
    volume.value=null;
});

function calcTerf(R, r, m) {
    let terfogat = (1/3)*Math.PI*R*r*m;
    return terfogat;
}