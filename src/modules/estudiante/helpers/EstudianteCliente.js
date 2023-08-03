import axios from "axios";

//el export sirve para poder usar el componente
export const obtenerEstudianteFachada = async (cedula) => { //para que el comp me mande la cdedula
    console.log('AXIOS');
    return await obtenerEstudianteAPI(cedula);
}

export const obtenerEstudianteFachadaApiAxios = async (cedula) => { //para que el comp me mande la cdedula
    console.log('AXIOS');
    return await obtenerEstudianteAPIAxios(cedula);
}



export const ingresarEstudianteFachada = (bodyEstudiante) => {   //me envia un body un json
    ingresarEstudiante(bodyEstudiante);
}

export const actualizarEstudianteFachada = (bodyEstudiante, id) => {
    actualizarEstudiante(bodyEstudiante, id);
}

export const elminarEstudianteFachada = async(id) => {
    await eliminarEstudiante(id);
}


const obtenerEstudianteAPI = async (cedula) => {
    const data = await fetch(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

//este metodo tiene un await implicito
const obtenerEstudianteAPIAxios = async (cedula) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.data);
    console.log('Axios 2');
    return data;
}

const ingresarEstudiante = (bodyEstudiante) => {
    axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, bodyEstudiante).then(r => r.data);
}

const actualizarEstudiante = (bodyEstudiante, id) => {
    axios.put(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante).then(r => r.data);
}

const eliminarEstudiante = async(id) => {
    await axios.delete(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)
}


