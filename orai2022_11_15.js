/*var list=[5,3,9,8,10]
console.log("Tömb ekemeunek a száma:",lists.length)

let hazi =    [
]*/
function feltolt()
let tobbDimTomb=[]
for(let i = 0; i < 10; i++){
    let sor=[]
    for(let j = 0; j < 10; j++){
            /*sor.j=i*j;
            {
                //htmles resz scriptje
            }*/
            if (i+j-1===10){
                sor[j]="<td id='piros'>"+"1"+"</td>"
            }else if(i===10) {
                //sor[j]="<td id='"+i+j+"' onmouseover='over("+i+","+j+")' onmouseleave='leave("")'>"  
            }else {
                sor[j]="<td>"+"0"+"</td>"
            }
        }
        tobbDimTomb.push(sor)
        return tobbDimTomb
}

tombkiir(feltolt())
function tombkiir(tobbDimTomb) {
    html="table"
    for(let i = 0; i < tobbDimTomb.length; i++){
        html+="<tr>"
        for(let j = 0; j < tobbDimTomb[i].length; j++){
                //console.log.TobbDimTomb[i][j]
                html+=tobbDimTomb[i][j]
                html+="</tr>"
                
            }
    }
    html+="/table"
    return html;
}
function kiir(id) {
    document.getElementById(id).innerHTML=tombkiir(feltolt())
}