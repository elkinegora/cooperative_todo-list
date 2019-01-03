import * as React from "react";

export default class InputField extends React.Component<InputFieldProps, {}> {

    addTodoItem = () => {
        console.log("it works");
    };

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Текст новой задачи" aria-label="Текст новой задачи" aria-describedby="btn-add" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.addTodoItem} type="button" id="btn-add">Добавить</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
