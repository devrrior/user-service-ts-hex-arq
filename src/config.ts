import * as process from "process";

export default {
    "smtp": {
        "gmail": {
            "user": process.env.SMTP_USER_GMAIL as string ?? "",
            "password": process.env.SMTP_PASSWORD_GMAIL as string ?? "",
            "host": process.env.SMTP_HOST_GMAIL as string ?? "",
            "port": +(process.env.SMTP_PORT_GMAIL ?? "") as number,
        }
    },
    "db": {
        "mysql": {
            "url": process.env.MYSQL_DATABASE_URL as string ?? "",
            "host": process.env.MYSQL_DATABASE_HOST as string ?? "",
            "name": process.env.MYSQL_DATABASE_NAME as string ?? "",
            "username": process.env.MYSQL_DATABASE_USERNAME as string ?? "",
            "password": process.env.MYSQL_DATABASE_PASSWORD as string ?? "",
            "port": +(process.env.MYSQL_DATABASE_PORT ?? "") as number,
        }
    }
}