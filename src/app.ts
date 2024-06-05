import express, { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Factory function para instanciar una entidad maestra y calcular la edad
const createMasterEntity = (nombre: string, fechaNacimiento: string): any => {
  const id = uuidv4(); // Generamos un nuevo UUID
  const fechaNacimientoDate = new Date(fechaNacimiento);
  const edad = calcularEdad(fechaNacimientoDate);
  return { id, nombre, fechaNacimiento, edad };
};

// Función para calcular la edad a partir de la fecha de nacimiento
const calcularEdad = (fechaNacimiento: Date): number => {
  const hoy = new Date();
  const cumpleanos = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const mes = hoy.getMonth() - cumpleanos.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }

  return edad;
};

// GET para obtener todos los equipos (ejemplo)
app.get('/equipos', (req: Request, res: Response) => {
  // Supongamos que aquí obtienes todos los equipos de tu base de datos
  const equipos = [
    { id: '1', nombre: 'Equipo 1', pais: 'País 1', entrenador: 'Entrenador 1', estado: 'Activo' },
    { id: '2', nombre: 'Equipo 2', pais: 'País 2', entrenador: 'Entrenador 2', estado: 'Activo' }
  ];
  res.json(equipos);
});

// POST para crear un nuevo equipo (ejemplo)
app.post('/equipos', (req: Request, res: Response) => {
  const { nombre, pais, entrenador, estado } = req.body;
  // Aquí puedes realizar la lógica para crear un nuevo equipo en tu base de datos
  const nuevoEquipo = { id: uuidv4(), nombre, pais, entrenador, estado };
  res.status(201).json(nuevoEquipo);
});

// Punto de inicio del servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
