var list=["egy","ketto","harom"]

function listaKeszit(){
    listElement=document.getElementById("lista")
    listaKeszit.forEach(element => {
        listElement.add(new Option(element,4))
        listElement.push(new Option(element,4))
    });
}