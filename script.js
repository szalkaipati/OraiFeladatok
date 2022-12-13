
const persons=[
    { name:'Tom Swayer', birthdate: 1930, death: 1945 },
    { name:'Bart Simpson', birthdate: 1989, /*death: 2017 */},
    { name:'Doctor Strange', birthdate: 1930, death: 2020 },
    { name:'Peter Griffin', birthdate: 1999, death: 2017 },
    { name:'Ragner Lothbrok', birthdate: 760, death: 800 }
]

const _foreach = () => {
    //console.log(persons[2])
    persons.forEach ((value,index)=> {
        //console.log(index,value)
        console.log(index,value.name)
        console.log(index,value.death-value.birthdate)
    })
}

const _for=() =>{ //ezt fokent akkor hasznaljuk amikro nen az elejetol kel bejarni a bizonyos adathalmazt
    for (let i=0; i<persons.length; i++){
        console.log(persons[i]);
    }
}

const _for_of=()=>{ //mindig az ertekeket adja vissza
    for (person /*,index*/ of persons){ //indexet igy nem lehet
        console.log(/*index,*/ person); 
    }
}

/*const _for_in=()=>{
    for (person in persons){
        console.log(person); //indexeket adja vissza
    }
}*/
//elozot inkabb igy :
const _for_in=()=>{ //mindig az indexeket adja vissza
    for (property in persons){
        console.log(property,persons[property]); //indexeket adja vissza es a tombot is
    }
}

/*const bejaras=() => {
    for (const person of persons){
        for (property in person){
            console.log(property);
        }
    }
}*/

const bejaras=() => {
    for (const person of persons){
        for (property in person){
            console.log(property,person[property]);
        }
    }
}


const teljesBejaras=() => {
    for (const person of persons){
        for (property in person){
            console.log(property+': ',person[property]);
        }
    }
}
//teljesBejaras()

//irassunk ki véletlenszerüen egy nevet a Persons tömbből
const feladat_r1 = () => {
    //console.log(Math.floor (Math.random()*100)) //amivel megszorzod az a max-1. szam 100nal 99 az utolso amit meg tud generalni
    //console.log(Math.floor (Math.random()*persons.length))
console.log(persons[Math.floor (Math.random()*persons.length)/*+1*/].name)

}
feladat_r1()

//Math.random() egy 0 es 1 kozotti tartomany tudsz generalni, amilyen ertekkel megszorozzuk mindig annyi -1 kozott ad erteket  pl.: *5 = 0 es 4 kozott.

//hf.: tobbi matematikaira peldat irni
//masik hf.: adathalmaz death résszel: modjuk meg az eletidejet annak aki a legtobbet elt.


//_for()
//_for_of()
//_for_in()
//bejaras()
//feladat_1()