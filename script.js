const tanulo = {nev: "Maci Laci",
                cime: "Yellowstone",
                kedvenc: "Méz",
                kiirlog: function(){
                    /*console.log("A tanuló neve: ",tanulo.nev)
                    console.log("A tanuló címe: ",tanulo.cime)
                    console.log("A tanuló kedvenc étele: ",tanulo.kedvenc)*/
                    console.log("A tanuló neve: ",this.nev)
                    console.log("A tanuló címe: ",this.cime)
                    console.log("A tanuló kedvenc étele: ",this.kedvenc)
                },
                kiirInnerHtml: function() { /*() => { //<--ez a function () helyett.
                    return " A tanuló neve: " + tanulo.nev + "<br>" + "A tanuló címe: " + tanulo.cime + "<br>" + "A tanuló kedvenc étele: " + tanulo.kedvenc*/
                    return " A tanuló neve: " + this.nev + "<br>" + "A tanuló címe: " + this.cime + "<br>" + "A tanuló kedvenc étele: " + this.kedvenc
                }    
            }
/*console.log("A tanuló neve: ",tanulo.nev)
console.log("A tanuló címe: ",tanulo.cime)
console.log("A tanuló kedvenc étele: ",tanulo.kedvenc)
*/
tanulo.kiirlog()

tanulo.kedvenc ="Mézes puszedli"
console.log("A tanuló kedvenc étele: ",tanulo.kedvenc)
console.log("A tanuló kedvenc étele: ",tanulo["kedvenc"])

//dolgozatban feladattípusok
/*
-objektumok pl.: definialf tombot es azon belul vannak ertekek. mi az osszeguk/atlaguk. hozzunk letre objektumot, 
||ketdimenzios tomb--soronkenti osszeguk stb(ez az 5osert)||
-listaba legordulo menu, ezt fel kell tolteni (tombbol(???) ), es megjelenitetni, listabol torles, rendezetten jelenkenek meg a szinek, sort, tombhoz uj elem hozzaadas hogyan.
-string kezelo fuggvenyek pl.: csereld ki benne kisbetut nagybeture, egesz sziveg kisbetu nagybeture,  vagy  mondatot szedjuk szet szavakra es a szavakban minden szó elso betujet nagybetusre es utana alakitsuk vissza a mondatot,

*/