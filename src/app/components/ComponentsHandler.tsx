import * as React from "react";
import ToDoList from "./input-field/input-field";
import TasksStates from "./tasks-states/tasks-states";

export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, ComponentsHandlerState> {
    render(){
        return(
            <React.Fragment>
                <ToDoList />
                {/*<TasksStates />*/}
            </React.Fragment>
        );
    }
}
