import { connect } from "mongoose";

import { URI } from "../config/conf.js";

export const dbConnection = async () => {
  try {
    await connect(URI);
    console.log("Base de datos MONGO conectada");
  } catch (err) {
    console.log("Error al conectar a BD: ", err);
    process.exit();
  }
};
