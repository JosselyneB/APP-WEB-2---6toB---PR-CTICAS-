// app.ts
import express from 'express';
import { equiposRouter } from './routes/equiposRouter';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/equipos', equiposRouter);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
