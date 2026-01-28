import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

//routerek


//routerek vége

//app.use

//app.use vége

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});