function* transformacionesDBZ(name, transformaciones){
    let posi = 0
    while(true){
      let t = transformaciones[posi]
      posi++
      let posi = yield t
    }
}

const Goku = transformacionesDBZ("Goku", [ "Normal " ,"kaioken " ,"kaioken x3" ,"kaioken x4" ,"kaioken x20" ,"ssj normal" ,"ssj mejorado " ,"ssj 2 normal" ,"ssj 2 debilitado" ,"ssj kaioken (super kaioken)" ,"ssj 3 Normal" ,"ssj 3 debilitado" ,"ssj dios" ,"ssj dios azul" ])
Goku.next()