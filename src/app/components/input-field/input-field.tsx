import * as React from "react";
import VerstkaExample from "../TestFolder/verstka-example";
import { arrayMove, SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

export default class InputField extends React.Component<InputFieldProps, InputFieldState> {

    constructor(props: any) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
        this.state = {
            term: '',
            items: [
                {id: 0, title: 'Задача 1', completed: false, readonly: true, className: 'list-group__head'},
                {id: 1, title: 'Задача 2', completed: false, readonly: true, className: 'list-group__head'},
                {id: 2, title: 'Задача 3', completed: false, readonly: true, className: 'list-group__head'},
                {id: 3, title: 'Задача 4', completed: false, readonly: true, className: 'list-group__head'}
            ]
        }
    }

    onChange = (event: any) => {
        this.setState({term: event.target.value});
    };

    onEditTask = (value: Item, event: any) => {
        event.preventDefault();
        const items = this.state.items.concat();
        items.map((values, index) => {
            if(values.id == value.id) {
                items[index].title = event.target.value;
            }
        });

        this.setState({items});

    };

    onSubmit = (event: any) => {
        event.preventDefault();
        if(this.state.term != '') {
            const itemObj: Item = {
                id: this.state.items.length,
                completed: false,
                readonly: true,
                title: this.state.term,
                className: 'list-group__head',
            };
            this.setState({
                term: '',
                items: [...this.state.items, itemObj]
            });
        } else {
            alert('Задача должна иметь текст. Попробуй введи его.')
        }
    };

    deleteHandler = (value: Item, event: any) => {
        event.stopPropagation();
        const items = this.state.items.concat();
        items.map((values, index) => {
            if(values.id == value.id) {
                items.splice(index, 1);
            }
        });
        this.setState({items});
    };

    editHandler = (value: Item, event: any) => {
        event.stopPropagation();
        const items = this.state.items.concat();

        items.map((values, index) => {
            if(values.id == value.id) {
                items[index].className = 'list-group__head list-group--edit';
                items[index].readonly = false;
            }
        });

        this.setState({items});
    };

    saveHandler = (value: Item, event: any) => {
        event.stopPropagation();
        const items = this.state.items.concat();
        items.map((values, index) => {
            if(values.id == value.id) {
                items[index].className = 'list-group__head';
                items[index].title = value.title;
                items[index].readonly = true;
            }
        });
        this.setState({items});
    };

    completeHandler = (value: Item) => {
        const items = this.state.items.concat();
        items.map((values, index) => {
            if(values.id == value.id) {
                if(items[index].className == 'list-group__head list-group--completed') {
                    items[index].className = 'list-group__head';
                    items[index].completed = false;
                } else {
                    items[index].className = 'list-group__head list-group--completed';
                    items[index].completed = true;
                }
            }
        });
        this.setState({items});
    };

    repeatHandler = (value: Item, event: any) => {
        event.stopPropagation();
        const items = this.state.items.concat();
        items.map((values, index) => {
            if(values.id == value.id) {
                if(items[index].className == 'list-group__head list-group--completed') {
                    items[index].className = 'list-group__head';
                    items[index].completed = false;
                }
            }
        });
        this.setState({items});
    };

    resetAction = (value: Item, event: any) => {
        event.stopPropagation();
    };

    render() {

        const DragHandle = SortableHandle(() => <button className="btn-group__move"><i className="fas fa-arrows-alt" /></button>);

        const SortableItem = SortableElement(({value}: {value: Item}) =>
            <div className="list-group__item">
                <div className={value.className} onClick={this.completeHandler.bind(this, value)}>
                    <div className="list-group__title">
                        <div className="btn-group">
                            <DragHandle />
                        </div>
                        <input type="text" className="list-group__name" readOnly={value.readonly} onClick={this.resetAction.bind(this, value)} onChange={this.onEditTask.bind(this, value)} value={value.title}/>
                    </div>
                    <div className="btn-group">
                        <div className="btn-group__icon">
                            <button className="btn-group__save" onClick={this.saveHandler.bind(this, value)}>
                                <i className="far fa-save" />
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button className="btn-group__repeat" onClick={this.repeatHandler.bind(this, value)}>
                                <i className="fas fa-redo-alt"></i>
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button className="btn-group__edit" onClick={this.editHandler.bind(this, value)}>
                                <i className="far fa-edit" />
                            </button>
                        </div>
                        <div className="btn-group__icon">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.deleteHandler.bind(this, value)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="list-group__empty" />
            </div>
        );

        const SortableList = SortableContainer(({items}: {items: Item[]}) => {
            return (
                <div className="list-group">
                    {items.map((value, index) => (
                        <SortableItem index={index} value={value} />
                    ))}
                </div>
            );
        });
        return (
            <React.Fragment>
                <div className="input-group mb-5">
                    <input type="text" className="form-control" placeholder="Текст новой задачи" aria-label="Текст новой задачи" aria-describedby="btn-add" value={this.state.term} onChange={this.onChange} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={this.onSubmit} type="button" id="btn-add">Добавить</button>
                    </div>
                </div>
                { this.state.items.length != 0
                    ? <React.Fragment>
                        <h2>Список задач</h2>
                    </React.Fragment>
                    : null }
                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} useDragHandle={true} />
                {/*Компонент VerstkaExample нужен исключительно для примера верстки которая была создана на начальных этапах
                 Для того чтобы использовать его, надо раскомментировать компонент VerstkaExample ниже под этим комментарием */}
                {/*<VerstkaExample />*/}
            </React.Fragment>
        );
    }

    private onSortEnd = ({oldIndex, newIndex}: {oldIndex: number, newIndex: number}) => {

        // при изменении index нужно задать новые id для элементов, для последующего редактирования/закрытия задачи
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });

        // const items = this.state.items;
        //
        // // items[oldIndex].id = newIndex;
        // //
        // // this.setState( {items} );
        //
        // const newItems = [];
        // items.map((value, index) => {
        //     console.table(value);
        //     newItems = [...newItems, itemObj]
        // });


    };
}