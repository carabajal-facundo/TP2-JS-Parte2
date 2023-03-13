/* ||-------------Arrays-------------|| */

// Punto 1
/*
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Nobiembre', 'Diciembre'];
document.write("<h1>Meses</h1>");
document.write("<ul>");
for(let mes = 0; mes < 12; mes++){
    document.write("<li>"+meses[mes]+"</li>");
}
document.write("</ul>");
*/

// Punto 2
/*
let ciudades = [];
let stop = confirm("Desea ingresar una ciudad?");
let cont = 0;
if(stop){
    while(stop){
        ciudades[cont]=prompt("Ingrese el nombre de la ciudad");
        cont++;
        stop = confirm("Desea ingresar otra ciudad?");
    }
    document.write("Las ciudades ingresadas son:<br>");
    for(let i=0; i<ciudades.length; i++){
        document.write(ciudades[i]);
        if(i==ciudades.length-1) document.write("<br>");
        else document.write(" - ");
    }

    document.write("<br>La loguitud del arreglo es: "+ciudades.length+"<br>");

    document.write("<br>Se muestran los elementos de las siguientes posiciones<br>");
    document.write("El primer es: "+ciudades[0]+"<br>");
    if(ciudades.length>=3) document.write("El Tercero es: "+ciudades[2]+"<br>");
    if(ciudades.length>=cont) document.write("El ultimno es: "+ciudades[cont-1]+"<br>");

    document.write("<br>Se agrega la siudad de Paris<br>");
    ciudades.push("Paris");
    document.write("Las ciudades ingresadas son:<br>");
    for(let i=0; i<ciudades.length; i++){
        document.write(ciudades[i]);
        if(i==ciudades.length-1) document.write("<br>");
        else document.write(" - ");
    }

    document.write("<br>Se muestra el segundo elemento<br>");
    if(ciudades.length>=2) document.write("El Segundo es: "+ciudades[1]+"<br>");
    else document.write("No se hay mas de dos elementos :(<br>");

    document.write("<br>Se sustituye el segundo elemento por Barcelona<br>");
    if(ciudades.length>=2){
        ciudades[1]='Barcelona';
        for(let i=0; i<ciudades.length; i++){
            document.write(ciudades[i]);
            if(i==ciudades.length-1) document.write("<br>");
            else document.write(" - ");
        }
    }
    else document.write("No se hay mas de dos elementos :(<br>");
}
*/

// Punto 3

/*
cada elemento del array suma representa la cantidad de veces que aparece una suma de los dados
Ej: suma[0] equivale a la cantidad de veces que aparece la suma que da 2,
suma[1] equivale a la cantidad de veces que aparece la suma que da 3 y asi sucesivamente hasta tener la suma de 12
*/
/*
let suma = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let dados;
for(let i=0; i<50; i++){
    dados = ( parseInt(Math.random() * (7 - 1) + 1) ) + ( parseInt(Math.random() * (7 - 1) + 1) );
    switch (dados){
        case 2:
            suma[0]+=1;
            break;
        case 3:
            suma[1]+=1;
            break;
        case 4:
            suma[2]+=1;
            break;
        case 5:
            suma[3]+=1;
            break;
        case 6:
            suma[4]+=1;
            break;
        case 7:
            suma[5]+=1;
            break;
        case 8:
            suma[6]+=1;
            break;
        case 9:
            suma[7]+=1;
            break;
        case 10:
            suma[8]+=1;
            break;
        case 11:
            suma[9]+=1;
            break;
        case 12:
            suma[10]+=1;
            break;
    }
}
document.write("cantidada de veces que aparece el 2: "+suma[0]+"<br>");
document.write("cantidada de veces que aparece el 3: "+suma[1]+"<br>");
document.write("cantidada de veces que aparece el 4: "+suma[2]+"<br>");
document.write("cantidada de veces que aparece el 5: "+suma[3]+"<br>");
document.write("cantidada de veces que aparece el 6: "+suma[4]+"<br>");
document.write("cantidada de veces que aparece el 7: "+suma[5]+"<br>");
document.write("cantidada de veces que aparece el 8: "+suma[6]+"<br>");
document.write("cantidada de veces que aparece el 9: "+suma[7]+"<br>");
document.write("cantidada de veces que aparece el 10: "+suma[8]+"<br>");
document.write("cantidada de veces que aparece el 11: "+suma[9]+"<br>");
document.write("cantidada de veces que aparece el 12: "+suma[10]+"<br>");
*/

/* ||-------------Funciones-------------|| */

// Punto 1

function parOImpar(num){
    if(parseInt(num)){
        if((num%2)==0) document.write("El numero es un numero par");
        else document.write("El numero es un numero impar");
    }
    else document.write("No es un numero");
}
/*
let numero = 6;
parOImpar(numero);
*/

// Punto 2

function cadenaCmpuesta(cadena){
    if (cadena===cadena.toUpperCase()) document.write("La cadena esta compuesta por solo mayusclas");
    else if(cadena===cadena.toLowerCase()) document.write("La cadena esta compuesta por solo minusculas");
    else document.write("La cadena esta echa por minusculas y mayusculas");
}
/*
let cad = prompt("ingrese una cadena de texto");
cadenaCmpuesta(cad);
*/

// Punto 3

function perimetroRectangulo(a,b){
    if(parseInt(a)&&parseInt(b)){
        return 2*(parseInt(a)+parseInt(b));
    }
    else return 0
}
/*
let ladoA=prompt("Ingrese uno de los lados del rectangulo");
let ladoB=prompt("Ingrese el lado restante del rectangulo");
document.write("El perietro del rectangulo es: "+perimetroRectangulo(ladoA,ladoB));
*/

// Punto 4

function tablaDeMultiplicacion(num){
    if(parseInt(num)){
        let numero = parseInt(num);
        for(let i=1; i<11; i++){
            document.write(i+' * '+num+' = '+ (i*num)+"<br>");
        }
    }
    else document.write("No es un numero :(");
}
/*
let numero=prompt("Ingrese un nuemro");
tablaDeMultiplicacion(numero);
*/
