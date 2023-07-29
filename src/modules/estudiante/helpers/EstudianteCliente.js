import axios from "axios";

//el export sirve para poder usar el componente
export const obtenerEstudianteFachada = async (cedula) => { //para que el comp me mande la cdedula
    return await obtenerEstudianteAPI(cedula);
}

export const ingresarEstudianteFachada = (bodyEstudiante) => {   //me envia un body un json

}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {

}

export const elminarEstudianteFachada = (id) => {

}


const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);

}

const obtenerEstudianteAPIAxios = (cedula) => {

}



