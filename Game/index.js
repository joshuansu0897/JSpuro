let niveles = 15
let teclas = generarTeclas(niveles)

function generarTeclas(niveles) {
  let arr = new Array(niveles)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(2);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i][0] = generarTeclaAleatoria()
    arr[i][1] = shiftAleatorio()
  }
  return arr
}

function shiftAleatorio() {
  return (Math.random() > 0.50) ? true : false
}

function generarTeclaAleatoria() {
  const min = 65
  const max = 90
  return Math.round(Math.random() * (max - min) + min)
}

function getElementByKeyCode(keyCode) {
  return document.querySelector(`[data-key="${keyCode}"]`)
}

function siguienteNivel(nivelActual) {
  if (nivelActual == niveles) {
    return alert('Ganaste')
  }
  alert(`Nivel ${nivelActual + 1}`)

  for (let i = 0; i <= nivelActual; i++) {
    setTimeout(() => activate(teclas[i][0], teclas[i][1]), 1000 * (i+1))
  }

  let i = 0
  let teclaActual = teclas[i][0]
  let sh = teclas[i][1]
  window.addEventListener('keydown', onkeydown)
  function onkeydown(ev) {
    if(ev.keyCode == 16) {
      shiftAct(true)
      return
    }
    if (ev.keyCode == teclaActual && ev.shiftKey == sh) {
      activate(teclaActual,sh,{ success: true })
      i++
      if (i > nivelActual) {
        window.removeEventListener('keydown', onkeydown)
        setTimeout(() => siguienteNivel(i), 1500)
      }
      teclaActual = teclas[i][0]
      sh = teclas[i][1]
    } else {
      activate(ev.keyCode, ev.shiftKey, { fail: true })
      setTimeout(() => activate(teclaActual, sh), 600)
      window.removeEventListener('keydown', onkeydown)
      alert('Pierdes')
    }
  }
}

function activate(keyCode, shift, opts = {}) {
  const el = getElementByKeyCode(keyCode)
  const s = document.querySelector(`[data-key="16"]`)
  el.classList.add('active')
  if(shift){
    s.classList.add('active')
  }
  if (opts.success) {
    if(shift){
      s.classList.add('active')
      s.classList.add('success')
    }
    el.classList.add('success')
  } else if (opts.fail) {
    if(shift){
      s.className = 'key shift'
      s.classList.add('active')
      s.classList.add('fail')
    }
    el.classList.add('fail')
  }
  setTimeout(() => deactivate(el), 500)
  setTimeout(() => deactivateShift(s), 550)
}


function shiftAct(shift) {
  const s = document.querySelector(`[data-key="16"]`)
  s.classList.add('active')
  s.classList.add('success')
  setTimeout(() => deactivateShift(s), 600) 
}

function deactivate(el) {
  el.className = 'key'
}

function deactivateShift(s) {
  s.className = 'key shift'
}

siguienteNivel(0)