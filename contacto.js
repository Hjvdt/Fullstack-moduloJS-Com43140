let valido
do{
    let nombre=prompt("Ingrese Nombre: ");
    let apellido=prompt("Ingrese Apellido: ");
    let telefono=prompt("Indique su Telefono: ");
    if(isNaN(telefono)){
        alert("Debes ingresar un número válido");
    }else{
        let mail=prompt("Ingrese su Mail: ");
        let valido = validacion(mail)
        if(valido){
            let consulta=prompt("Mensaje que nos quiere dejar: ");
            let mensaje = "Confirma los datos ingresados?: \n";
            mensaje = mensaje + "* Apellido: " + apellido +"\n";
            mensaje = mensaje + "* Nombre: " + nombre + "\n" ;
            mensaje = mensaje + "* Telefono: " + telefono + "\n";
            mensaje = mensaje + "* Mail: " + mail + "\n" ;
            mensaje = mensaje + "* Consulta: " + consulta + "\n";  
            let respuesta = confirm(mensaje);
            if (respuesta){
                alert("Gracias por dejarnos su consulta. Pronto nos comunicaremos con Ud.");
                break;
            }else{
                alert("Ingresa nuevamente los datos");
                
            }
        }
    } 
}while(!valido)

function validacion(input){
    if (input==""){
        alert("Ingrese un dato valido");
        return false;
    }
    return true;
}