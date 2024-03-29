import * as cors from "cors";
import * as express from "express";
import taskRoute from "./src/route/task.route";
import { dbConfig } from "./src/config/task.config";

const port = 8080;
dbConfig
.initialize()
.then(() => {
    console.log("Data Source has been initialized!");

})
.catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api/v1/task', taskRoute)

  app.listen(port,  () => {
    console.log(`server run in ${port}`);
    
});