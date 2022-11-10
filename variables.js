class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [libros]
        this.mascotas = [mascotas]
    }

    getFullName() {
        return (`${this.nombre} ${this.apellido}`);
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
      return  this.mascotas.length
    }

    addBook(libro, autor) {
        this.libros.push({titulo:libro, autor:autor})
    }

    getBooks() {
        return this.libros.map(function (libro) {
            return libro.titulo
        })
    }

}

//Creacion de un nuevo Usuario
const usuario = new Usuario ('Nicolas', 'Perez', {titulo:'El Principito', autor:'Antoine de Saint-Exupéry'}, 'perro');

//Ejecucion de funciones

//Apartado Nombres
console.log(usuario.getFullName()) 

//Apartado Mascotas
usuario.addMascota('pez')
usuario.addMascota('gato')
console.log(usuario.mascotas) 

console.log(usuario.countMascotas())

// Apartado Libros
usuario.addBook('El Patito Feo', 'Charles Darwin')
usuario.addBook('El Secreto', 'Julio Ricardo')
usuario.addBook('2012', 'Luis Miguel')

console.log(usuario.libros)
console.log(usuario.getBooks())

