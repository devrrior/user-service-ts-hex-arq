import {Sequelize} from "sequelize-typescript";
import config from "./config";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: config.db.mysql.host,
    database: config.db.mysql.name,
    username: config.db.mysql.username,
    password: config.db.mysql.password,
    port: config.db.mysql.port,
    models: [__dirname + '/**/*.model.ts']

});

const syncConnection = async () => {
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
}

export default syncConnection;