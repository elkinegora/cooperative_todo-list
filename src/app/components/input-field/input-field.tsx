import * as React from "react";
import TasksList from "../tasks-list/tasks-list";

export default class InputField extends React.Component<InputFieldProps, InputFieldState> {

    constructor(props:any) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event:any) => {
        this.setState({term: event.target.value});
    };

    onSubmit = (event:any) => {
        event.preventDefault();
        if(this.state.term != '') {
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
            console.log(this.state)
        } else {
            alert('Задача должна иметь текст. Попробуй введи его.')
        }

    };

    deleteHandler(index:any) {
        const items = this.state.items.concat();
        items.splice(index, 1);
        this.setState({items});
        console.log(items)
    };

    editHandler(index:any) {

        const items = this.state.items.concat();
        // items[index].push({readOnly: true});
        // this.setState({items});
        console.log(items);
    };

    render() {
        return (
            <React.Fragment>
                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Текст новой задачи" aria-label="Текст новой задачи" aria-describedby="btn-add" value={this.state.term} onChange={this.onChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.onSubmit} type="button" id="btn-add">Добавить</button>
                    </div>
                </div>
                <TasksList
                    items={this.state.items}
                    onClose={this.deleteHandler.bind(this)}
                    onEdit={this.editHandler.bind(this)}/>
            </React.Fragment>
        );
    }
}
