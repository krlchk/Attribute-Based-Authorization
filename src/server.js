import express from "express";
import { port } from "./config/env.js";
import projectRoutes from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/project", projectRoutes);

//Error handling
app.use(errorHandler);

//App listen
app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
