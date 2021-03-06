import * as express from "express";
import { createConnection } from "typeorm";
import * as cors from "cors";
import routes from "./routes/prospectos.routes";
const port =  process.env.port || 3001;

createConnection()
  .then(() => {
    var app = express();
    app.use(cors());
    app.use(express.json());

    app.use("/", routes);
    app.listen(port, () =>
      console.log(`Ejecutando server en http://localhost:${port}!!`)
    );
  })
  .catch(err => console.log(err));
