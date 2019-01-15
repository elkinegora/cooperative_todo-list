import * as React from "react";

export default class ToDoList extends React.Component<ToDoListProps, ToDoListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            term: '',
            items: [],
            showActiveCount: 0,
            showClosedCount: 0
        }
    }

    onChange = (event: any) => {
        this.setState({term: event.target.value});
    };

    onChangeItemTask = (event: any, index: number) => {
        const items = this.state.items.concat();

        items[index].title = event.target.value;
        this.setState({items});
    };

    onSubmit = (event: any) => {
        event.preventDefault();

        if(this.state.term != '') {
            const itemObj: Item = {
                id: this.state.items.length,
                title: this.state.term,
                completed: false,
                readonly: true,
                invisible: false
            };

            this.setState(function(state, props) {
                return {
                term: '',
                    items: [...state.items, itemObj],
                };
            }, () => this.getStatusTasks());
        } else {
            alert('Задача должна иметь текст. Попробуй введи его.')
        }
    };

    deleteTask = (index: number) => {
        const items = this.state.items.concat();

        items.splice(index, 1);
        this.setState({items});
        this.getStatusTasks();
    };

    editTask = (index: number) => {
        const items = this.state.items.concat();

        items[index].readonly = false;
        this.setState({items});
    };

    saveTask = (index: number) => {
        const items = this.state.items.concat();

        items[index].readonly = true;
        this.setState({items});
    };

    completedTask = (index: number) => {
        const items = this.state.items.concat();

        items[index].completed ? (items[index].completed = false) : (items[index].completed = true);
        this.setState({items});
        this.getStatusTasks();

    };

    getStatusTasks = () => {
        let showClosedCount:number = 0;
        let showActiveCount:number = 0;
        const items = this.state.items.concat();

        items.map((item: any) => {
             (item.completed) ? showClosedCount++ : showActiveCount++;
        });
        this.setState({showClosedCount, showActiveCount});
    };

    render() {
        const items = this.state.items.concat();

        return (
            <React.Fragment>
                <div className="content__container container">
                    <div className="row">
                        <div className="card col-lg-12">
                            <div className="card-body">
                                <h1 className="card-title text-center mb-5">To Do List</h1>
                                <form onSubmit={this.onSubmit} className="input-group mb-5">
                                    <input type="text" className="form-control" placeholder="Текст новой задачи" aria-label="Текст новой задачи" aria-describedby="btn-add" value={this.state.term} onChange={this.onChange}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" onClick={this.onSubmit} type="button">Добавить</button>
                                    </div>
                                </form>
                                <ListTask
                                    items={items}
                                    onChangeItemTask={this.onChangeItemTask}
                                    deleteTask={this.deleteTask}
                                    editTask={this.editTask}
                                    saveTask={this.saveTask}
                                    completedTask={this.completedTask} />
                                { this.state.items.length != 0
                                    ? <TasksStates
                                        items={this.state.items}
                                        showActiveCount={this.state.showActiveCount}
                                        showClosedCount={this.state.showClosedCount}/>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class TasksStates extends React.Component<TasksStatesProps, TasksStatesState> {
    render() {
        return (
            <div className="link-group text-center">
                    <span className="link-group__item">Все задачи <span
                        className="badge badge-primary badge-pill">{this.props.items.length}</span></span>
                <span className="link-group__item">Активные <span
                    className="badge badge-primary badge-pill">{this.props.showActiveCount}</span></span>
                <span className="link-group__item">Выполнено <span
                    className="badge badge-primary badge-pill">{this.props.showClosedCount}</span></span>
            </div>
        );
    }
}

class ListTask extends React.Component<ListTaskProps, ListTaskState> {
    render() {
        return(
            <React.Fragment>
                {this.props.items.map((item: any , index: number) => (
                    <ItemTask
                        item={item}
                        index={index}
                        onChangeItemTask={this.props.onChangeItemTask}
                        deleteTask={this.props.deleteTask}
                        editTask={this.props.editTask}
                        saveTask={this.props.saveTask}
                        completedTask={this.props.completedTask}
                        key={index} />
                ))}
            </React.Fragment>
        );
    }
}

// формирование отдельной задачи
class ItemTask extends React.Component<ItemTaskProps, ItemTaskState> {
   render() {
        const item = this.props.item;
        let className = 'list-group__head';
        let classNameItem = 'list-group__item';
        if(!item.readonly) {
            className = className + ' list-group--edit';
        }

       if(item.completed) {
           className = className + ' list-group--completed';
       }

       if(item.invisible) {
           classNameItem = classNameItem + ' list-group--invisible';
       }

        return (
            <React.Fragment>
                <div className={classNameItem}>
                <div className={className}>
                    <div className="list-group__title">
                        <div className="btn-group btn-group__check">
                            <button className="btn-group__move"><i className="fas fa-arrows-alt" /></button>
                        </div>
                        <div className="btn-group btn-group__check">
                            <label htmlFor={`item-${this.props.index}`}>
                                <input id={`item-${this.props.index}`} type="checkbox" name="check" onChange={() => this.props.completedTask(this.props.index)} checked={item.completed}/>
                                <span className="label-text" />
                            </label>
                        </div>
                        <div className="list-group__wraptitle">
                            <input type="text" className="list-group__name" onChange={(e) => this.props.onChangeItemTask(e, this.props.index)} readOnly={item.readonly}  value={item.title}/>
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="btn-group__icon">
                            <button className="btn-group__save" onClick={() => this.props.saveTask(this.props.index)}>
                                <i className="far fa-save" />
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button className="btn-group__repeat" onClick={() => this.props.completedTask(this.props.index)}>
                                <i className="fas fa-redo-alt" />
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button className="btn-group__edit" onClick={() => this.props.editTask(this.props.index)}>
                                <i className="far fa-edit" />
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => this.props.deleteTask(this.props.index)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-group__empty" />
            </div>
            </React.Fragment>
        );
    }
}
