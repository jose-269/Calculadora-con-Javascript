
//variables
const one = document.getElementById("uno");
const two = document.getElementById("dos");
const three = document.getElementById("tres");
const four = document.getElementById("cuatro");
const five = document.getElementById("cinco");
const six = document.getElementById("seis");
const seven = document.getElementById("siete");
const eigth = document.getElementById("ocho");
const nine = document.getElementById("nueve");
const zero = document.getElementById("cero");

const add = document.getElementById("suma");
const substract = document.getElementById("resta");
const multi = document.getElementById("multiplica");
const divide = document.getElementById("divide");
const clear = document.getElementById("limpiar");
const equal = document.getElementById("igual");
let screen = document.getElementById("pantalla");

let guardarRes = "";
let operacion;

//Eventos
one.addEventListener("click", function() {
   screen.textContent += 1;
});
two.addEventListener("click", function() {
    screen.textContent += 2;
 });
three.addEventListener("click", function() {
    screen.textContent += 3;
 });
 four.addEventListener("click", function() {
    screen.textContent += 4;
 });
 five.addEventListener("click", function() {
    screen.textContent += 5;
 });
 six.addEventListener("click", function() {
    screen.textContent += 6;
 });
 seven.addEventListener("click", function() {
    screen.textContent += 7;
 });
 eigth.addEventListener("click", function() {
    screen.textContent += 8;
 });
 nine.addEventListener("click", function() {
    screen.textContent += 9;
 });
 zero.addEventListener("click", function() {
    screen.textContent += 0;
 });
 
 add.addEventListener("click", function() {
    screen.textContent += "+";
 });
 substract.addEventListener("click", function() {
    screen.textContent += "-";
 });
 multi.addEventListener("click", function() {
    screen.textContent += "*";
 });
 divide.addEventListener("click", function() {
    screen.textContent += "/";
 });
 clear.addEventListener("click", function() {
     screen.textContent = "";
 })

 
   const sumar = function(){
      guardarRes = screen.textContent;
      operacion = "+";
      screen.textContent = ""; 
   }

   const resta = function() {
      guardarRes = screen.textContent;
      operacion = "-";
      screen.textContent = "";
   };
   
   const multiplicar = function() {
      guardarRes = screen.textContent;
      operacion = "*";
      screen.textContent = "";
   };

   const division = function(){
      guardarRes = screen.textContent;
      operacion = "/";
      screen.textContent = "";
   };
   function resetear(){
      guardarRes = 0;
      screen.textContent = 0;
      operacion ="";
   }

   let resolver = function() {
      let resolverOperaciones = 0;
      if (operacion === "+" ){
        resolverOperaciones = parseFloat(guardarRes) + parseFloat(screen.textContent); 
      }else if (operacion === "-"){
        resolverOperaciones = parseFloat(guardarRes) - parseFloat(screen.textContent); 
      }else if (operacion === "*"){
        resolverOperaciones = parseFloat(guardarRes) * parseFloat(screen.textContent);  
      }else if (operacion === "/"){
        resolverOperaciones = parseFloat(guardarRes) / parseFloat(screen.textContent); 
      }
      
      resetear()
      screen.textContent = resolverOperaciones;
   };
     
 add.addEventListener("click", sumar);
 substract.addEventListener("click", resta);
 multi.addEventListener("click", multiplicar);
 divide.addEventListener("click", division)
 equal.addEventListener("click", resolver);
 
 

 

