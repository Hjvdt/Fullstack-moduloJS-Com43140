// Objeto para almacenar los usuarios registrados
let usuariosRegistrados = [];
const hoy = new Date();


if (login()) {
    iniciarSesion();
}

// Función para registrar un nuevo usuario
function login() {
    let nombre = prompt("Ingrese Nombre: ");
    let apellido = prompt("Ingrese Apellido: ");
    let mail = prompt("Ingrese su Mail: ");
    let mensaje = "Confirma los datos ingresados?: \n";
    mensaje = mensaje + "* Apellido: " + apellido + "\n";
    mensaje = mensaje + "* Nombre: " + nombre + "\n";
    mensaje = mensaje + "* Mail: " + mail + "\n";
    let respuesta = confirm(mensaje);
    if (!respuesta) {
        alert("Ingresa nuevamente los datos");
        login();
    }
    let nomUser = prompt("Ingrese su Usuario:");
    let pass = prompt("Ingrese su contraseña:");

    //validar contraseña
    function validaPass(pass) {
        if (pass.length < 8) {
            return false;
        }
        let caracter = /^[a-zA-Z0-9]+$/;
        return caracter.test(pass);
    }

    function validaUsuario(nomUser) {
        // Verificar si el nombre de usuario contiene solo letras y números
        let caracteres = /^[a-zA-Z0-9]+$/;
        return caracteres.test(nomUser);
    }

    // Valido si el usuario ya existe
    let usuarioExistente = usuariosRegistrados.find(function (usuario) {
        return usuario.nomUser === nomUser;
    });

    if (!validaUsuario(nomUser)) {
        alert("El nombre de usuario debe contener solo letras y números.");
        login();
    } else if (usuarioExistente) {
        alert("El usuario ya está registrado. Por favor, inicie sesión.");
        iniciarSesion();
    } else if (!validaPass(pass)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula y un número.");
        login();
    } else {
        let nuevoUsuario = {
            nomUser: nomUser,
            pass: pass,
            nombre: nombre,
            apellido: apellido,
            mail: mail,
        };

        usuariosRegistrados.push(nuevoUsuario);
        alert("Registro exitoso. Por favor, INICIE SESION para ingresar al Sistema de Turnos.");
        iniciarSesion();
    }
}

// Función para iniciar sesión
function iniciarSesion() {
    let nomUser = prompt("Ingrese su usuario:");
    let pass = prompt("Ingrese su contraseña:");

    // Valido los datos ingresados por el usuario
    let usuarioValido = usuariosRegistrados.find(function (usuario) {
        return usuario.nomUser === nomUser && usuario.pass === pass;
    });

    if (usuarioValido) {
        alert("Inicio de sesión exitoso. ¡Bienvenido, " + nomUser.toUpperCase() + "! \n" + hoy.toLocaleString());
        mostrarMenu();
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Por favor, intente nuevamente.");
        iniciarSesion();
    }
}

