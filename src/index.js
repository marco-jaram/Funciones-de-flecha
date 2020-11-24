import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Funciones</h1>
<div>
  Uso de const y funciones de flecha arrow
  
`;

//antes funciones normales
function sumar(num) {
  console.log(num);
}
sumar(10); //mandamos lllamr la

//ahora funciones de flecha

const sumar2 = (num) => {
  console.log(num);
};
sumar2(50);

//cunado son mas de unparametro  va entre parentesisi
const sumar3 = (num1, num2) => {
  console.log(num1 + num2);
};
sumar3(80, 20);

//cuando es una funcion asi sencilla se puede omitir el return
//la suma tenemos que guardarla en uan const
const sumar4 = (n1, n2) => n1 + n2;
const resultado = sumar4(80, 80);
console.log(resultado);

//otro ejemplo todo lo que esta del lado derecho de la funcion de flecha
///es lo que se va a retornar se pueden poner parentesis
const mensaje = (nombre) => "Hola soy " + nombre;
const resultado3 = mensaje("Marco");
console.log(resultado3);

//interesante en la const de suma5 se puede poner (num =0 o tambien a 1,2,3, etc)
const suma5 = (num) => {
  console.log(num + 5);
};

suma5(10);
