//1.-Definir un objeto por cada entidad asignada (3 entidades).
// Definición de la clase Equipo
class Equipo {
    id: number;
    descripcion: string;
    serie: string;

    constructor(id: number, descripcion: string, serie: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.serie = serie;
    }
}

// Definición de la clase Torneo
class Torneo {
    id: number;
    descripcion: string;

    constructor(id: number, descripcion: string) {
        this.id = id;
        this.descripcion = descripcion;
    }
}

// Definición de la clase Partido
class Partido {
    id: number;
    idTorneo: number;
    idEquipo1: number;
    idEquipo2: number;
    golesEquipo1: number;
    golesEquipo2: number;
    observacion: string;

    constructor(id: number, idTorneo: number, idEquipo1: number, idEquipo2: number, golesEquipo1: number, golesEquipo2: number, observacion: string) {
        this.id = id;
        this.idTorneo = idTorneo;
        this.idEquipo1 = idEquipo1;
        this.idEquipo2 = idEquipo2;
        this.golesEquipo1 = golesEquipo1;
        this.golesEquipo2 = golesEquipo2;
        this.observacion = observacion;
    }
}





//2.- Definir una interfaz por cada objeto y asignarla como tipo de objeto.
// Definición de la interfaz para Equipo
interface Equipo {
    id: number;
    descripcion: string;
    serie: string;
}

// Definición de la interfaz para Torneo
interface Torneo {
    id: number;
    descripcion: string;
}

// Definición de la interfaz para Partido
interface Partido {
    id: number;
    idTorneo: number;
    idEquipo1: number;
    idEquipo2: number;
    golesEquipo1: number;
    golesEquipo2: number;
    observacion: string;
}

// Ejemplo de uso de las interfaces como tipo de objeto
let equipo: Equipo = {
    id: 1,
    descripcion: "Equipo A",
    serie: "Serie 1"
};

let torneo: Torneo = {
    id: 1,
    descripcion: "Torneo de Primavera"
};

let partido: Partido = {
    id: 1,
    idTorneo: 1,
    idEquipo1: 1,
    idEquipo2: 2,
    golesEquipo1: 2,
    golesEquipo2: 1,
    observacion: "Partido emocionante"
};




//3.- Crear un arreglo de objetos basándose en la entidad transaccional con por lo menos 3 elementos.
// Definición de la interfaz para Partido
interface Partido {
    id: number;
    idTorneo: number;
    idEquipo1: number;
    idEquipo2: number;
    golesEquipo1: number;
    golesEquipo2: number;
    observacion: string;
}

// Arreglo de objetos de la entidad transaccional "Partido"
let partidos: Partido[] = [
    {
        id: 1,
        idTorneo: 1,
        idEquipo1: 1,
        idEquipo2: 2,
        golesEquipo1: 2,
        golesEquipo2: 1,
        observacion: "Partido emocionante"
    },
    {
        id: 2,
        idTorneo: 1,
        idEquipo1: 3,
        idEquipo2: 4,
        golesEquipo1: 0,
        golesEquipo2: 3,
        observacion: "Gran victoria del Equipo B"
    },
    {
        id: 3,
        idTorneo: 2,
        idEquipo1: 2,
        idEquipo2: 4,
        golesEquipo1: 1,
        golesEquipo2: 1,
        observacion: "Empate emocionante"
    }
];

console.log(partidos);

//4.- Crear una función que reciba el arreglo del punto anterior y un ID (u otro atributo que no se repita) y proceder a eliminar el elemento del arreglo
/*function eliminarPartidoPorID(partidos: Partido[], id: number): Partido[] {
    // Encontrar el índice del partido con el ID dado
    const index = partidos.findIndex(partido => partido.id === id);
    
    // Si se encontró el partido con el ID dado, eliminarlo del arreglo
    if (index !== -1) {
        partidos.splice(index, 1);
    }
    
    return partidos;
}

// Ejemplo de uso de la función para eliminar un partido por ID
const partidosModificados = eliminarPartidoPorID(partidos, 2);
console.log(partidosModificados);*/

function eliminarPartidoPorID(partidos: Partido[], id: number, callback: (partidoEliminado: Partido | null) => void): Partido[] {
    // Encontrar el índice del partido con el ID dado
    const index = partidos.findIndex(partido => partido.id === id);
    
    // Si se encontró el partido con el ID dado, eliminarlo del arreglo y ejecutar el callback con los datos del partido eliminado
    if (index !== -1) {
        const partidoEliminado = partidos[index];
        partidos.splice(index, 1);
        callback(partidoEliminado);
    } else {
        // Si no se encontró ningún partido con el ID dado, ejecutar el callback con null
        callback(null);
    }
    
    return partidos;
}

// 5.- Agregar a la función anterior un Callback que le permita acceder por última vez a los datos del elemento eliminado y mostrarlo por consola.
function mostrarPartidoEliminado(partidoEliminado: Partido | null) {
    if (partidoEliminado) {
        console.log("Partido eliminado:");
        console.log(partidoEliminado);
    } else {
        console.log("No se encontró ningún partido con el ID proporcionado.");
    }
}

// Ejemplo de uso de la función para eliminar un partido por ID y mostrar el partido eliminado por consola
const partidosModificados = eliminarPartidoPorID(partidos, 2, mostrarPartidoEliminado);
console.log("Partidos actualizados:");
console.log(partidosModificados);