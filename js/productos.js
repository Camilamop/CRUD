const { createApp } = Vue
createApp({
data() {
return {
ciudad:[],
//url:'http://localhost:5000/productos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
url:'https://Camimop.pythonanywhere.com/ciudad', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
nombre:"",
dias:0,
precio:0,
descripcion:"",
imagen:"",
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.ciudad = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(ciudad) {
const url = this.url+'/' + ciudad;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
let ciudad = {
nombre:this.nombre,
dias:this.dias,
precio: this.precio,
descripcion: this.descripcion,
imagen:this.imagen
}
var options = {
body:JSON.stringify(ciudad),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href ="../index.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
