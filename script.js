// // Declaro Variable Body
// alert("Se cargo el archivo JavaScript");

// let body = document.body;
// // let titulo = document.getElementById("titulo");

// // console.log(titulo.innerHTML);
// let chau = "Chau ";
// let mundo = "Mundo2!"

// let x = document.getElementsByClassName("card")[0];
// debugger;
// // titulo.innerHTML = chau + mundo;
// // x.item(3).style.borderColor = "red";

// console.log(x.length);

let myObjeto = {
    "color": "red",
    "myFunction": function () {
        alert("Disparaste la funcion");
    }
}

// Ejecuto
myObjeto.myFunction();

// Declaro Funcion fuera del objeto
let otraFuncion = function () {
    alert("Disparaste otra funcion");
}

// Se la asigno al objeto como propiedad
myObjeto.otraFuncion = otraFuncion;