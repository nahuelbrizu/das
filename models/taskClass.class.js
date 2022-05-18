import {ONLINE} from "./levels.online";

export class TaskCompA {
    name = "";
    last_name = "";
    email = "" ;
    connect = false;
    online = ONLINE.OFFLINE;

    constructor(name, last_name, email, connect, online) {
        this.name = name;
        this.last_name =  last_name;
        this.email = email;
        this.connect = connect;
        this.online = online
    }
}