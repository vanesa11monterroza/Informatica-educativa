var respuesta = document.getElementById('e')
var salida = " "

function validar (  ) {
    var autor1 = document.getElementById('uno').value ;
    var hecho4 = document.getElementById('cuatro').value;
    
    if(autor1 === "Howard Hathaway Aiken" && hecho4=== "la primera calculadora"){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuesta.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuesta.innerHTML = salida
    }
   
}

function validar2 (  ) {
    var autor2 = document.getElementById('dos').value;
    var hecho5 = document.getElementById('cinco').value;
    if(autor2 === "Grace Murray Hopper" && hecho5=== "programadora del primer gran ordenador"){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuesta.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuesta.innerHTML = salida
    }
   
}
function validar3 (  ) {
    var autor3 = document.getElementById('tres').value;
    var hecho6 = document.getElementById('seis').value;
    if(autor3 === "Charles Babbage" && hecho6 === "la maquina analitica"){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuesta.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuesta.innerHTML = salida
    }
   
}

function pregunta1 ( ) {
let x = document.getElementById('puno').value
let respuestas = document.getElementById('a')
if(x === 'a'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }   
}
function pregunta2 ( ) {
    let x = document.getElementById('pdos').value
    let respuestas = document.getElementById('b')
    if(x === 'd'){
        salida = '<p style=" color:blue ">correcto<p>'
         return respuestas.innerHTML = salida
        }else{
            salida = '<p style=" color:red ">incorrecto<p>'
            return respuestas.innerHTML = salida
        }   
}


function pregunta3 ( ) {
    let respuestas = document.getElementById('c')
    let x = document.getElementById('ptres').value
if(x === 'b'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}

function pregunta4 ( ) {
    let x = document.getElementById('pcuatro').value
    let respuestas = document.getElementById('d')
if(x === 'c'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}

function pregunta5 ( ) {
    let x = document.getElementById('pcinco').value
    let respuestas = document.getElementById('e')
if(x === 'c'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}

function pregunta6 ( ) {
    let x = document.getElementById('pseis').value
    let respuestas = document.getElementById('f')
if(x === 'b'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}
function pregunta7 ( ) {
    let x = document.getElementById('psiete').value
    let respuestas = document.getElementById('g')
if(x === 'b'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}
function pregunta8 ( ) {
    let respuestas = document.getElementById('h')
    let x = document.getElementById('pocho').value
if(x === 'd'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}
function pregunta9 ( ) {
    let x = document.getElementById('pnueve').value
    let respuestas = document.getElementById('i')
if(x === 'd'){
    salida = '<p style=" color:blue ">correcto<p>'
     return respuestas.innerHTML = salida
    }else{
        salida = '<p style=" color:red ">incorrecto<p>'
        return respuestas.innerHTML = salida
    }  
}

