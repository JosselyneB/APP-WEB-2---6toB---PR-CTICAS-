import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()



async function main() {


interface Equipo {
  id: number;
  nombre: string;
  ciudad: string;
}

interface Torneo {
  id: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
}

interface Partido {
  id: number;
  equipoLocal: Equipo;
  equipoVisitante: Equipo;
  torneo: Torneo;
  estado: boolean;
}


const equipos: Equipo[] = [
  { id: 1, nombre: "Equipo A", ciudad: "Ciudad A" },
  { id: 2, nombre: "Equipo B", ciudad: "Ciudad B" },
  { id: 3, nombre: "Equipo C", ciudad: "Ciudad C" }
];

const torneos: Torneo[] = [
  { id: 1, nombre: "Torneo X", fechaInicio: new Date("2024-01-01"), fechaFin: new Date("2024-01-31") },
  { id: 2, nombre: "Torneo Y", fechaInicio: new Date("2024-02-01"), fechaFin: new Date("2024-02-29") },
  { id: 3, nombre: "Torneo Z", fechaInicio: new Date("2024-03-01"), fechaFin: new Date("2024-03-31") }
];

const partidos: Partido[] = [
  { id: 1, equipoLocal: equipos[0], equipoVisitante: equipos[1], torneo: torneos[0], estado: true },
  { id: 2, equipoLocal: equipos[1], equipoVisitante: equipos[2], torneo: torneos[1], estado: true },
  { id: 3, equipoLocal: equipos[2], equipoVisitante: equipos[0], torneo: torneos[2], estado: true }
];


function eliminarPartido(id: number): void {
  const partido = partidos.find(partido => partido.id === id);
  if (partido) {
      partido.estado = false;
      console.log(`El partido con ID ${id} ha sido eliminado.`);
  } else {
      console.log(`No se encontró ningún partido con ID ${id}.`);
  }
}


function recuperarPartido(id: number): void {
  const partido = partidos.find(partido => partido.id === id);
  if (partido) {
      partido.estado = true;
      console.log(`El partido con ID ${id} ha sido recuperado.`);
  } else {
      console.log(`No se encontró ningún partido con ID ${id}.`);
  }
}


console.log("Estado inicial de los partidos:");
console.log(partidos);

eliminarPartido(2);
console.log("Estado después de eliminar el partido con ID 2:");
console.log(partidos);

recuperarPartido(2);
console.log("Estado después de recuperar el partido con ID 2:");
console.log(partidos);


  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })