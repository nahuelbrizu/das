import React from "react";
import {TaskCompA} from "./taskClass.class";
import TaskComponents from "./task.online";
import {ONLINE} from ".levels.online";

const ListComponent = () => {
const defaultTask = new TaskCompA("Example", "Default", "email@email.com ",false, ONLINE.OFFLINE);

    const changeState = (id) => {
        console.log("TODO: cambiar estado de una tarea")

    }

    return (
        <div>
            <div>
                Your Tasks :
            </div>
            {/*TODO: aplicar for/Map  */}
            <TaskComponents task={defaultTask} />
        </div>
    )

}
export  default ListComponent;
