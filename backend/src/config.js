import {config} from "dotenv";
config();
export default {
    host: process.env.HOST,
    database: "alquilartemis2",
    user: "root",
    password: ""
}
// no me dejaba poner el process.env