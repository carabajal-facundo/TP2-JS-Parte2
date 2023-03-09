// ||-------------Arrays-------------||

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
