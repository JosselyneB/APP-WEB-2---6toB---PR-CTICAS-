-- Database: ExamenPrimerParcial

-- DROP DATABASE IF EXISTS "ExamenPrimerParcial";
-- Tabla Secuencia
CREATE TABLE Secuencia (
  ID INT PRIMARY KEY,
  Nombres VARCHAR(255),
  Secuencias INT
);

-- Tabla Equipo
CREATE TABLE Equipo (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255),
  pais VARCHAR(255),
  entrenador VARCHAR(255),
  estado VARCHAR(255) DEFAULT 'Activo'
);

-- Tabla Torneo
CREATE TABLE Torneo (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255),
  fechaInicio TIMESTAMP,
  fechaFin TIMESTAMP,
  lugar VARCHAR(255),
  estado VARCHAR(255) DEFAULT 'Activo'
);

-- Tabla Partido
CREATE TABLE Partido (
  id SERIAL PRIMARY KEY,
  equipoLocalId INT,
  equipoVisitanteId INT,
  fecha TIMESTAMP,
  resultado VARCHAR(255),
  estado VARCHAR(255) DEFAULT 'Activo',
  torneoId INT,
  FOREIGN KEY (equipoLocalId) REFERENCES Equipo(id),
  FOREIGN KEY (torneoId) REFERENCES Torneo(id)
);




INSERT INTO Secuencia (ID, Nombres, Secuencias)
VALUES (1, 'Nombre1', 10),
       (2, 'Nombre2', 20),
       (3, 'Nombre3', 30);


INSERT INTO Equipo (nombre, pais, entrenador)
VALUES ('Equipo A', 'País A', 'Entrenador A'),
       ('Equipo B', 'País B', 'Entrenador B');


INSERT INTO Torneo (nombre, fechaInicio, fechaFin, lugar)
VALUES ('Torneo 2024', '2024-05-01', '2024-06-30', 'Lugar A'),
       ('Torneo 2025', '2025-04-01', '2025-05-31', 'Lugar B');


INSERT INTO Partido (equipoLocalId, equipoVisitanteId, fecha, resultado, torneoId)
VALUES (1, 2, '2024-05-10', '2-1', 1),
       (2, 1, '2024-05-15', '0-0', 1);

select * from partido
