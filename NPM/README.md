# dragonBall

aprendiendo JS npm etc etc

## Descripción

- Puedes obtener unos cuantos personajes de DragonBall
- Goku, Cell, Kriling
- Puedes ver las transformaciones de los personajes
- Que raza es.
- Talvez por ultimo datos cursiosos del personaje, ...talvez

## Instalacion

```
npm install dragonballpersonajes
```

## Uso

```
const Dragon = require('dragonballpersonajes').default

const Goku = new Dragon("Goku")
Goku.nombre // "Goku"
Goku.raza // "Sayayin"
Goku.transformaciones // ["Normal ", "kaioken ", ..., "ssj dios", "ssj dios azul"]
Goku.listartransformaciones() 
    /*
        soy Goku y una de mis Tranformaciones es Normal 
        soy Goku y una de mis Tranformaciones es kaioken 
        .
        .
        .
        soy Goku y una de mis Tranformaciones es ssj dios azul
    */
Goku.next().value // "Normal"
Goku.next().value // "Kaioken"
.
.
.
Goku.next().value // "ssj dios azul"
Goku.next().value // "Normal"

Goku.next(1).value // "Kaioken"
```

## Créditos
- Aquí merengue

## Licencia

[MIT](https://opensource.org/licenses/MIT)