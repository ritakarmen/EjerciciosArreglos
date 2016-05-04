// Escribe aquí tu codigo Javascript
var nombres=['Maria',' Jose',' Jesus']
var mensaje=parseInt(prompt('Ingresa el numero de nombres a agregar: '))
for (var i = 1; i <=mensaje; i++) {
	var nuevonombre=prompt('escribe el nombre que desee agregar: ')
	nombres.push(nuevonombre)
}
alert(nombres);