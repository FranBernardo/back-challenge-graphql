import { Sequelize } from "sequelize";

const sequelize = new Sequelize("DATEBASE", "USER_NAME", "PASSWORD", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
