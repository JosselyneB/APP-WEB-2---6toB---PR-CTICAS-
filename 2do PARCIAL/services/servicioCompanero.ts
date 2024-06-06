// services/servicioCompanero.ts
import axios from 'axios';

const obtenerDatosDeServicioCompanero = async (endpoint: string) => {
  try {
    const response = await axios.get(`http://192.168.100.249:3000/alumnos${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos del servicio de mi compañero:', error);
    throw error;
  }
};

export default obtenerDatosDeServicioCompanero;
