const expect = require('chai').expect
const Dragon = require('..').default

describe('#dragonballpersonajes', function(){
    it('Nombre de Goku, pues es Goku', function(){
        const Goku =new Dragon("Goku")
        expect(Goku.nombre).to.equal("Goku")
    })
    it('Raza de Krilin es Humano', function(){
         const kriling =new Dragon("Kriling")
        expect(kriling.raza).to.equal("Humano")
    })
    it('El siguiente valor de Cell es Larva Cell', function(){
         const cell =new Dragon("Cell")
        expect(cell.next().value).to.equal("Larva Cell")
    })
    it('Las transformaciones de Krilin son:', function(){
        const kriling =new Dragon("Kriling")
        console.log("este imprime directamente con un console.log")
        expect(kriling.listartransformaciones()).to.equal(undefined)
    })

})