function kiir(szoveg){
    document.getElementById("eredmeny").innerHTML += szoveg + "<br>";
}

function tombKiir(tomb){
    tomb.forEach(element => {
        document.getElementById("eredmeny").innerHTML += element + "<br>";
    });
}

var szoveg="MaCi dalol a mezőn és nézi az egetc.";

function csinald(){
    kiir(szoveg.length);
    kiir(szoveg.substring(10));
    kiir(szoveg.substring(5,15));
    kiir(szoveg.substring(5,15)+"dve");
    kiir(szoveg.substring(-5,15));
    kiir(szoveg.replace("Maci","Macika"));
    kiir(szoveg.concat(" ","buborek", "aiusdoiausuwiodepois"))
    kiir(szoveg.concat(["buborek", "aiusdoiausuwiodepois"]));
    kiir(szoveg.charAt(8));
    kiir(szoveg.split(" "));
    tombKiir(szoveg.split(" "));
    kiir(szoveg.toLowerCase());
    kiir(szoveg.toUpperCase());
    kiir(szoveg.trim());

    kiir(szoveg.replaceAll("c","b" || "C","B"))
}


var szoveg2="Maci:dalol:a:mezőn:és nézi:az:eget.";
function Csere(cserel){
    cserel.forEach()
}
function Feladat2(){
    kiir(szoveg2)
}

/*function Csere(cserel){
    //csereld ki a szivegben a v es c betuket

    //van egy szoveged ami :pontokkal elvalasztva van es annak a z osszeget ird
}*/


//kiir(szoveg.length.toString);
//kiir("maci")