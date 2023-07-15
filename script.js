class Turno {
    constructor(id, nombrePaciente, fecha, hora) {
        this.id = id;
        this.nombrePaciente = nombrePaciente;
        this.fecha = fecha;
        this.hora = hora;
    }

    mostrarInformacion() {
        return (
            "#" +
            this.id +
            " - Paciente: " +
            this.nombrePaciente +
            " - Fecha: " +
            this.fecha +
            " - Hora: " +
            this.hora
        );
    }

    getId() {
        return this.id;
    }

    setId(nuevoId) {
        this.id = nuevoId;
    }
}

let arregloTurnos = [];

let arregloHorarios = [
    "7:30 am",
    "7:45 am",
    "8:00 am",
    "8:15 am",
    "8:30 am",
    "8:45 am",
    "9:00 am",
    "9:15 am",
    "9:30 am",
    "9:45 am",
    "10:00 am",
];

let contadorId = 1;
let respuesta = true;

while (respuesta != "salir" && respuesta) {
    respuesta = mostrarMenu();
}

function mostrarMenu() {
    let flag = true;
    while (flag) {
        let mensaje = "Indique lo que desea hacer: ";
        mensaje += "\n1) Ver horarios disponibles ";
        mensaje += "\n2) Agendar un turno ";
        mensaje += "\n3) Cancelar un turno ";
        mensaje += "\n4) Ver los turnos dados ";
        mensaje += "\n5) Salir ";
        let resp = prompt(mensaje);
        switch (resp) {
            case "1":
                alert("Los horarios disponibles son:\n" + mostrarHorarios());
                break;
            case "2":
                agregarTurno();
                break;
            case "3":
                cancelarTurno();
                break;
            case "4":
                alert("Los turnos son:\n" + mostrarTurnos());
                break;
            case "5":
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            case null:
                alert("Gracias por utilizar nuestra pagina :) ");
                flag = false;
                break;
            default:
                alert("No ingreso una opcion valida");
        }
    }
}

function agregarTurno() {
    let nombrePaciente = prompt("Ingrese el nombre del paciente:");
    let fecha = prompt("Ingrese la fecha del turno, sólo de Lunes a Viernes(formato: DD/MM/AAAA):");
    let hora = prompt("Ingrese la hora del turno (formato hh:mm):");

    // Verifico si la fecha y hora del turno son válidas
    let fechaValida = /^\d{2}\/\d{2}\/\d{4}$/;
    let horaValida = /^\d{2}:\d{2}$/;

    if (!fechaValida.test(fecha) || !horaValida.test(hora)) {
        alert("La fecha u hora del turno ingresados no son válidos.");
        agregarTurno();
        return;
    }
    arregloTurnos.push(new Turno(contadorId, nombrePaciente, fecha, hora));
    contadorId++;
    alert("Turno agendado correctamente.\n" + mostrarTurnos());
}

function cancelarTurno() {
    let idTurno = prompt("Ingrese el ID del turno a cancelar:");
    let indice = buscarTurno(idTurno);

    if (indice >= 0) {
        arregloTurnos.splice(indice, 1);
        alert("Turno cancelado correctamente.\n" + mostrarTurnos());
    } else {
        alert("No se encontró un turno con el ID especificado.");
    }
}

function buscarTurno(idTurno) {
    for (let i = 0; i < arregloTurnos.length; i++) {
        if (arregloTurnos[i].getId() == idTurno) {
            return i;
        }
    }
    return -1;
}

function mostrarHorarios() {
    let listaHorarios = "";
    if (arregloHorarios.length === 0) {
        listaHorarios = "No hay horarios.";
    } else {
        for (let i = 0; i < arregloHorarios.length; i++) {
            listaHorarios += "\n" + arregloHorarios[i];
        }
    }
    return listaHorarios;
}

function mostrarTurnos(orden) {
    let listaTurnos = "";
    if (arregloTurnos.length === 0) {
        listaTurnos = "No hay turnos agendados.";
    } else {
        arregloTurnos.sort((a, b) => {
            if (a.fecha > b.fecha) {
                return 1;
            } else if (a.fecha < b.fecha) {
                return -1;
            } else {
                if (a.hora > b.hora) {
                    return 1;
                } else if (a.hora < b.hora) {
                    return -1;
                } else {
                    return 0;
                }
            }
        });
    }

    for (let i = 0; i < arregloTurnos.length; i++) {
        listaTurnos += "\n" + arregloTurnos[i].mostrarInformacion();
    }
return listaTurnos;
}
