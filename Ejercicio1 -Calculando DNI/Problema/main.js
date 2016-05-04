// Escribe aquí tu codigo Javascript
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni=parseInt(prompt('Ingrese el numero de DNI: '))
var letrausuario=prompt('Ingrese su letra de DNI: ')
var resto=0
if(dni<0||dni>99999999){
	alert('El numero proporcionado no es valido')
}else{
	resto=dni%23
	restos=letras[resto]
	if (restos==letrausuario) {
		alert('La letra que ingreso coincide con su DNI \n'+'N° DNI: '+dni+'\n'+'La letra que le corresponde es '+restos)
	}else{
		alert('LA LETRA QUE INDICO ES INCORRECTA '+'\n'+ 'El N° DNI es:  '+dni+' La letra que le corresponde es '+restos)
	}
}
