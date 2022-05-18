import React from "react";
import PropTypes from "prop-types";
import {TaskCompA} from "./taskClass.class";

const TaskConnectComponent = ({ task }) => {
    return (
        <div>
            <h2>
                Nombre: { task.name }
            </h2>
            <h3>
                Apellido: { task.last_name }
            </h3>
            <h4>
                Email: { task.email }
            </h4>
            <h4>
                online: {task.online}
            </h4>
            <h5>
                Is Connect: { task.completed ? "ONLINE" : "OFFLINE" }
            </h5>
        </div>

    )
};

TaskConnectComponent.propTypes = {
    task: PropTypes.instanceOf(TaskCompA)
};

export default TaskConnectComponent;
