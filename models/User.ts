import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
}
User.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "Users",
  }
);

export default User;
