import * as React from "react";

export default class TasksStates extends React.Component<TasksStatesProps, TasksStatesState> {
    render() {
        return (
            <React.Fragment>
                <div className="link-group text-center">
                    <a href="#" className="link-group__item">Все задачи <span className="badge badge-primary badge-pill">14</span></a>
                    <a href="#" className="link-group__item">Активные <span className="badge badge-primary badge-pill">8</span></a>
                    <a href="#" className="link-group__item">Выполнено <span className="badge badge-primary badge-pill">6</span></a>
                </div>
            </React.Fragment>
        );
    }
}
