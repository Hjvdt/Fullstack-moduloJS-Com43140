// Objeto para almacenar los usuarios registrados
let usuariosRegistrados = [];
const hoy = new Date();


if (login()) {
    iniciarSesion();
}

// Función para registrar un nuevo usuario
function login() {
    let nomUser = prompt("Ingrese su Usuario:");
    let pass = prompt("Ingrese su contraseña:");


    function validaUsuario(nomUser) {
        // Verificar si el nombre de usuario contiene solo letras y números
        let caracteres = /^[a-zA-Z0-9]+$/;
        return caracteres.test(nomUser);
    }

    // Validar si el usuario ya existe
    let usuarioExistente = usuariosRegistrados.find(function (usuario) {
        return usuario.nomUser === nomUser;
    });

    if (!validaUsuario(nomUser)) {
        alert("El nombre de usuario debe contener solo letras y números.");
        login();
    } else if (usuarioExistente) {
        alert("El usuario ya está registrado. Por favor, inicie sesión.");
        iniciarSesion();
    } else {
        let nuevoUsuario = {
            nomUser: nomUser,
            pass: pass
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

    // Validar los datos ingresados por el usuario
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

