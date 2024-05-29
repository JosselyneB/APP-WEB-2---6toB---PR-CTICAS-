// Definición de la entidad Secuencia
interface Secuencia {
    ID: number;
    Nombres: string;
    Secuencias: number;
  }
  
  // Datos de ejemplo (simulando una consulta a la base de datos)
  const secuenciaData: Secuencia = {
    ID: 1,
    Nombres: "Ejemplo",
    Secuencias: 42,
  };
  
  // Mostrar los datos en la consola
  console.log("ID:", secuenciaData.ID);
  console.log("Nombres:", secuenciaData.Nombres);
  console.log("Secuencias:", secuenciaData.Secuencias);
  