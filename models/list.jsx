import React from "react";
import {TaskCompA} from "../../models/taskClass.class";
import TaskComponents from "../pure/task.online";
import {ONLINE} from "../../models/levels.online";

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