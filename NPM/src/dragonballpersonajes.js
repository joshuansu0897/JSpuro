export default class dragonballpersonajes {
  constructor(nombre) {
      switch(nombre){
          case "Goku":
          this.transformaciones = [ "Normal " ,"kaioken " ,"kaioken x3" ,"kaioken x4" ,"kaioken x20" ,"ssj normal" ,"ssj mejorado " ,"ssj 2 normal" ,"ssj 2 debilitado" ,"ssj kaioken (super kaioken)" ,"ssj 3 Normal" ,"ssj 3 debilitado" ,"ssj dios" ,"ssj dios azul" ]
          this.raza = 'Sayayin'
          break;
          case "Cell":
          this.transformaciones =  [ "Larva Cell", "Cell nato", "Cell 1 forma", "Cell Semi Perfecto", "Cell Perfecto", "Cell Super Perfecto" ]
          this.raza = "Androide"
          break;
          case "Kriling":
          this.transformaciones = ["GOOOKUUUU!!!"]
          this.raza = "Humano"
          break;
      }
    this.nombre = nombre
    this.posi = 0
  }

  listartransformaciones() {
    this.transformaciones.forEach((transformacion) => {
      console.log(`soy ${this.nombre} y una de mis Tranformaciones es ${transformacion}`)
    })
  }  
      
  next(p){
    if(p) this.posi = p
    if(this.posi >= this.transformaciones.length) this.posi = 0
    let t = this.transformaciones[this.posi]
    this.posi++    
    return { value: t, done: false}
  }    
}
