//Como se hacia antes con _this
class DBZpersonajes {
  constructor(nombre, transformaciones = []) {
    this.nombre = nombre
    this.transformaciones = transformaciones
  }

  listartransformaciones() {    
    const _this = this
    this.transformaciones.forEach(function (transformacion)  {
      console.log(`soy ${_this.nombre} y una de mis Tranformaciones es ${transformacion}`)
    })
  }
}

const Goku = new DBZpersonajes("Goku", [ "Normal " ,"kaioken " ,"kaioken x3" ,"kaioken x4" ,"kaioken x20" ,"ssj normal" ,"ssj mejorado " ,"ssj 2 normal" ,"ssj 2 debilitado" ,"ssj kaioken (super kaioken)" ,"ssj 3 Normal" ,"ssj 3 debilitado" ,"ssj dios" ,"ssj dios azul" ])
Goku.listartransformaciones()

//----------------------------------------------------------------------------
//Como se hacia antes con bind(this)
class DBZpersonajes {
  constructor(nombre, transformaciones = []) {
    this.nombre = nombre
    this.transformaciones = transformaciones
  }

  listartransformaciones() {
    this.transformaciones.forEach(function (transformacion)  {
      console.log(`soy ${this.nombre} y una de mis Tranformaciones es ${transformacion}`)
    }.bind(this))
  }
}

const Cell = new DBZpersonajes("Cell", [ "Larva Cell", "Cell nato", "Cell 1 forma", "Cell Semi Perfecto", "Cell Perfecto", "Cell Super Perfecto" ])
Cell.listartransformaciones()

//----------------------------------------------------------------------------
//Con Arrow Function

class DBZpersonajes {
  constructor(nombre, transformaciones = []) {
    this.nombre = nombre
    this.transformaciones = transformaciones
  }

  listartransformaciones() {
    this.transformaciones.forEach((transformacion) => {
      console.log(`soy ${this.nombre} y una de mis Tranformaciones es ${transformacion}`)
    })
  }
}

const Krillin = new DBZpersonajes("Krillin", [ "GOOKUUUUU!!!" ])
Krillin.listartransformaciones()