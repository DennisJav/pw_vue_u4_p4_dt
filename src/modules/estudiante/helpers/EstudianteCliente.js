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

export const elminarEstudianteFachada = async (id) => {
    await eliminarEstudiante(id);
}


const obtenerEstudianteAPI = async (cedula) => {

    const data = await fetch(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`).then(r => r.json());
    console.log(data);
    return data;
}

//este metodo tiene un await implicito
const obtenerEstudianteAPIAxios = async (cedula) => {
    //en el config vamos a enviar todas 
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNjI4LCJleHAiOjE2OTI3NTE2Mjh9.hMgBGPZaOUf5Pgxy87oJkns_OZmlDjAHTT3rr9gsLkc4agjTK4xZqoiOsyvRfkptAjD6lZiD5qvYAh6aPXNxXA",
        "Mensaje": "Valor1"
    }
    const data = axios.get(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${cedula}`, { headers: headers }).then(r => r.data);
    console.log('Axios 2');
    return data;
}

const ingresarEstudiante = (bodyEstudiante) => {

    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNjI4LCJleHAiOjE2OTI3NTE2Mjh9.hMgBGPZaOUf5Pgxy87oJkns_OZmlDjAHTT3rr9gsLkc4agjTK4xZqoiOsyvRfkptAjD6lZiD5qvYAh6aPXNxXA",
        "Mensaje": "Valor1"
    }
    axios.post(`http://localhost:8081/API/v1.0/Matricula/estudiantes`, bodyEstudiante, { headers: headers }).then(r => r.data);
    console.log('Estudiante insertado');
}

const actualizarEstudiante = (bodyEstudiante, id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNjI4LCJleHAiOjE2OTI3NTE2Mjh9.hMgBGPZaOUf5Pgxy87oJkns_OZmlDjAHTT3rr9gsLkc4agjTK4xZqoiOsyvRfkptAjD6lZiD5qvYAh6aPXNxXA",
        "Mensaje": "Valor1"
    }
    axios.put(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`, bodyEstudiante, { headers: headers }).then(r => r.data);

}

const eliminarEstudiante = async (id) => {
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjkyNzUwNjI4LCJleHAiOjE2OTI3NTE2Mjh9.hMgBGPZaOUf5Pgxy87oJkns_OZmlDjAHTT3rr9gsLkc4agjTK4xZqoiOsyvRfkptAjD6lZiD5qvYAh6aPXNxXA",
        "Mensaje": "Valor1"
    }
    await axios.delete(`http://localhost:8081/API/v1.0/Matricula/estudiantes/${id}`, { headers: headers }).then(r => r.data)
}


