import { Router } from "express";


import equipoRoutes from './routes/equipo.routes.js'
import partidoRoutes from './routes/partido.routes.js'
import torneoRoutes from './routes/torneo.routes.js'

const app = express()

app.use(express.json())

app.use("/api", equipoRoutes);
app.use("/api", partidopoRoutes);
app.use("/api", torneoRoutes);

app.listen(3000)
console.log('Server on port', 3000)

