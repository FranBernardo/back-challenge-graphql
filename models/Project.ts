import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./User";
import sequelize from "../database";

class Project extends Model {
  public id!: number;
  public name!: string;
  public price!: number;
  public userId!: number;
}
Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Projects",
  }
);

Project.belongsTo(User, { foreignKey: "userId", as: "user" });
User.hasMany(Project, { foreignKey: "userId", as: "projects" });

export default Project;
