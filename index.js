distanciaRecorrida = prompt("¿Cuatos kilometros tiene que recorrer hasta su destino?")

if (distanciaRecorrida <= 1000 ){
    alert("Te recomiendo ir a pie")
}
else if (distanciaRecorrida <= 10000){
    alert("Te recomiendo ir a bicicleta")
}
else if (distanciaRecorrida <= 30000){
    alert("Te recomiendo ir en colectivo")
}else if (distanciaRecorrida <= 100000){
    alert("Te recomiendo ir en auto")
}else if (distanciaRecorrida > 100000  ){
    alert("Te recomiendo ir en avión")
}


//fin de primera funcion//

var numeros = [1,2,3,4,5,6,7]

document.write(numeros [6])