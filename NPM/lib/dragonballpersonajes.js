"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dragonballpersonajes = function () {
  function dragonballpersonajes(nombre) {
    _classCallCheck(this, dragonballpersonajes);

    switch (nombre) {
      case "Goku":
        this.transformaciones = ["Normal ", "kaioken ", "kaioken x3", "kaioken x4", "kaioken x20", "ssj normal", "ssj mejorado ", "ssj 2 normal", "ssj 2 debilitado", "ssj kaioken (super kaioken)", "ssj 3 Normal", "ssj 3 debilitado", "ssj dios", "ssj dios azul"];
        this.raza = 'Sayayin';
        break;
      case "Cell":
        this.transformaciones = ["Larva Cell", "Cell nato", "Cell 1 forma", "Cell Semi Perfecto", "Cell Perfecto", "Cell Super Perfecto"];
        this.raza = "Androide";
        break;
      case "Kriling":
        this.transformaciones = ["GOOOKUUUU!!!"];
        this.raza = "Humano";
        break;
    }
    this.nombre = nombre;
    this.posi = 0;
  }

  _createClass(dragonballpersonajes, [{
    key: "listartransformaciones",
    value: function listartransformaciones() {
      var _this = this;

      this.transformaciones.forEach(function (transformacion) {
        console.log("soy " + _this.nombre + " y una de mis Tranformaciones es " + transformacion);
      });
    }
  }, {
    key: "next",
    value: function next(p) {
      if (p) this.posi = p;
      if (this.posi >= this.transformaciones.length) this.posi = 0;
      var t = this.transformaciones[this.posi];
      this.posi++;
      return { value: t, done: false };
    }
  }]);

  return dragonballpersonajes;
}();

exports.default = dragonballpersonajes;