import * as React from "react";

export default class ToDoList extends React.Component<ToDoListProps, ToDoListState> {

    constructor(props: any) {
        super(props);
        this.state = {
            term: '',
            items: [
                {id: 0, title: 'Задача 1', completed: false, readonly: true, invisible: false},
                {id: 1, title: 'Задача 2', completed: false, readonly: true, invisible: false},
                {id: 2, title: 'Задача 3', completed: false, readonly: true, invisible: false},
                {id: 3, title: 'Задача 4', completed: false, readonly: true, invisible: false}
            ]
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
                invisible: true
            };
            this.setState({
                term: '',
                items: [...this.state.items, itemObj]
            });
        } else {
            alert('Задача должна иметь текст. Попробуй введи его.')
        }
    };

    deleteTask = (index: number) => {
        const items = this.state.items.concat();

        items.splice(index, 1);
        this.setState({items});
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
    };

    showActiveTasks = () => {
        const items = this.state.items.concat();

        items.map((item: any , index: number) => {
            if(item.completed){
                items[index].invisible = true;
            }
        });
        console.log(items);
        this.setState({items});
    };

    render() {
        const items = this.state.items.concat();

        //     .sort(function(a: any, b:any){
        //     return a.completed - b.completed;
        // });

        return (
            <React.Fragment>
                <div className="content__container container">
                    <div className="row">
                        <div className="card col-lg-12">
                            <div className="card-body">
                                <h1 className="card-title text-center mb-5">Кооперативный Todo-list</h1>
                                <form onSubmit={this.onSubmit} className="input-group mb-5">
                                    <input type="text" className="form-control" placeholder="Текст новой задачи" aria-label="Текст новой задачи" aria-describedby="btn-add" value={this.state.term} onChange={this.onChange}/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" onClick={this.onSubmit} type="button">Добавить</button>
                                    </div>
                                </form>
                                <ListTask items={items}
                                          onChangeItemTask={this.onChangeItemTask}
                                          deleteTask={this.deleteTask}
                                          editTask={this.editTask}
                                          saveTask={this.saveTask}
                                          completedTask={this.completedTask} />
                                {/*<TasksStates items={this.state.items}*/}
                                             {/*showActiveTasks={this.showActiveTasks}*/}
                                {/*/>*/}
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
                <a href="#" className="link-group__item">Все задачи <span className="badge badge-primary badge-pill">{this.props.items.length}</span></a>
                <a href="#" className="link-group__item" onClick={this.props.showActiveTasks}>Активные <span className="badge badge-primary badge-pill">8</span></a>
                <a href="#" className="link-group__item">Выполнено <span className="badge badge-primary badge-pill">6</span></a>
            </div>
        );
    }
}

class ListTask extends React.Component<ListTaskProps, ListTaskState> {
    render() {
        return(
            <React.Fragment>
                {this.props.items.map((item: any , index: number) => (
                    <ItemTask item={item}
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

class ItemTask extends React.Component<ItemTaskProps, ItemTaskState> {
   render() {
        const item = this.props.item;
        let className = 'list-group__head';

        if(!item.readonly) {
            className = className + ' list-group--edit';
        }

       if(item.completed) {
           className = className + ' list-group--completed';
       }

       if(item.invisible) {
           className = className + ' list-group--invisible';
       }

        return (
            <React.Fragment>
                <div className="list-group__item">
                    <div className={className}>
                        <div className="list-group__title">
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

