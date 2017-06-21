function transformacionesDBZ(name, transformaciones){
    let posi = 0
    return{
        next: function(){
            let t = transformaciones[posi]
            posi++
            return { value: t, done: false}
        }
    }
}

const Goku = transformacionesDBZ("Goku", [ "Normal " ,"kaioken " ,"kaioken x3" ,"kaioken x4" ,"kaioken x20" ,"ssj normal" ,"ssj mejorado " ,"ssj 2 normal" ,"ssj 2 debilitado" ,"ssj kaioken (super kaioken)" ,"ssj 3 Normal" ,"ssj 3 debilitado" ,"ssj dios" ,"ssj dios azul" ])
Goku.next().value

//Cont Symbol.iterator --------------------------------------------------------------

function transformacionesDBZ(){
    let posi = 0
    transformaciones = [ "Normal " ,"kaioken " ,"kaioken x3" ,"kaioken x4" ,"kaioken x20" ,"ssj normal" ,"ssj mejorado " ,"ssj 2 normal" ,"ssj 2 debilitado" ,"ssj kaioken (super kaioken)" ,"ssj 3 Normal" ,"ssj 3 debilitado" ,"ssj dios" ,"ssj dios azul" ]
    return{
        next: function(){
            let t = transformaciones[posi]
            posi++
            return { value: t, done: false}
        }
    }
}

const goku = {nombre : "Goku"} 
goku[Symbol.iterator] = transformacionesDBZ

for(let value of goku){
    if(!value)break
    console.log(value)
}