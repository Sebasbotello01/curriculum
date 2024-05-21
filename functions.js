//FORMAS DE IMPRIMIR EN PANTALLA
//alert("HOLA SOY UN ALERT DESDE EL ARCHIVO EXTERNO DE JS");
//console.log("HOLA SOY UN MENSAJE DE CONSOLA");  
//document.write("HOLA SOY LA INTERFAZ PRINCIPAL");
Swal.fire("Hola soy negro");

//VARIABLES Y TIPOS DE DATOS 
// const pi = 3.14; //decimal
// var name = "Jhoan Botello"; //string
// let edad = 18; //entero
// let edad_string ="18"; //string


var suma = 5-2;
console.log(suma);
console.log(edad_string);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

console.log("Mi nombre " + name+" tiene como edad "+edad);
function load_page(params) {
    Swal.fire({
        imageUrl: "data:image/jpeg;base64,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",
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 500,
      });
}
function send_info() {
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
        Swal.fire({
            title: "Campos Vacios",
            text: "Algunos Campos se encuentran vacios",
            icon: "error"
          });
          if(name.length==0){
            document.getElementById("name").style.border = "2px solid red"
          }
          if(last_name.length==0){
            document.getElementById("last_name").style.border= "2px solid red"
          }
    }else{
        document.getElementById("name").style.border = "2px solid green"
        document.getElementById("last_name").style.border = "2px solid green"
        document.getElementById("print").innerHTML = "<strong>" + name + " " + last_name + "</strong>"
    }
}
function send_name(){
  let name_one = document.getElementById("name_one").value;
  let name_two = document.getElementById("name_two").value;
  let shearch_var = document.getElementById("shearch_var").value;
  Swal.fire(name_one.toUpperCase()+" "+name_two.toUpperCase());
  let variable = name._com.charArt(shearch_var)
  console.log(isNaN(shearch_var));
  if(name_one.length == 0 || name_two.length == 0){
    Swal.fire({
        title: "Campos Vacios",
        text: "Algunos Campos se encuentran vacios",
        icon: "error"
      });
      if(name_one.length==0){
        document.getElementById("name_one").style.border = "2px solid red"
      }
      if(name_two.length==0){
        document.getElementById("name_two").style.border= "2px solid red"
      }
}else{
    document.getElementById("name").style.border = "2px solid green"
    document.getElementById("last_name").style.border = "2px solid green"
    document.getElementById("print").innerHTML = "<strong>" + name + " " + last_name + "</strong>"
}
  if(name_com.length<=shearch_var && shearch_var.length != 0){
    console.log(variable)
    Swal.fire(variable)
    document.getElementById("print_name").innerText = "La letra correspondiente al #" +shearch_var+ "es "+variable;
  }
  else if(isNaN(shearch_var)){
    Swal.fire({
      icon:"error",
      title:"El valor no es un numero "
    })
  }
  else{
    Swal.fire({
      icon:"error",
      title:"No tiene valor o supera la cantidad del texto"
    })
    document.getElementById("print_name").innerText = "";
  }
}