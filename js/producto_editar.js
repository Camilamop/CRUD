console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
nombre:"",
dias:0,
precio:0,
descripcion:"",
imagen:"",
url:'https://Camimop.pythonanywhere.com/ciudad'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id = data.id
this.nombre = data.nombre;
this.dias = data.dias;
this.precio = data.precio
this.descripcion = data.descripcion
this.imagen = data.imagen
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let ciudad = {
nombre:this.nombre,
dias:this.dias,
precio: this.precio,
descripcion: this.descripcion,
imagen:this.imagen
}
var options = {
body: JSON.stringify(ciudad),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../index.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
