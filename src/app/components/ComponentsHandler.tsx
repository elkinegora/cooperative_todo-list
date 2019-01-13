import * as React from "react";
import ToDoList from "./input-field/input-field";


export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, ComponentsHandlerState> {
    render(){
        return(
            <ToDoList />
        );
    }
}
