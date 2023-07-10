class Login {
    constructor(nomUser,pass){
        this.nomUser = nomUser ;
        this.pass = pass;
        this.is_adm = false;
        this.paciente = null ;
    }  
    getUser(){
        return this.nomUser;
    }
    setPaciente(paciente){
        this.paciente = paciente;
    }
    getPaciente(){
        return this.paciente;
    }
    
}