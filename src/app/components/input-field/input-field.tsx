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
    }

    onChange = (event: any) => {
        this.setState({term: event.target.value});
    };

    onSubmit = (event: any) => {
        event.preventDefault();
        if(this.state.term != '') {
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        } else {
            alert('Задача должна иметь текст. Попробуй введи его.')
        }
    };

    deleteHandler(index: any) {
        const items = this.state.items.concat();
        items.splice(index, 1);
        this.setState({items});
    };

    editHandler(index: any) {
        const items = this.state.items.concat();
        // items[index].push({readOnly: true});
        // this.setState({items});
        console.log(items);
    };

    render() {

        const DragHandle = SortableHandle(() => <button className="btn-group__move"><i className="fas fa-arrows-alt" /></button>);

        const SortableItem = SortableElement(({value}: {value: string}) =>
            <div className="list-group__item">
                <div className="list-group__head">
                    <div className="list-group__title">
                        <div className="btn-group">
                            <DragHandle />
                        </div>
                        <input type="text" className="list-group__name" readOnly={true} value={value}/>
                    </div>
                    <div className="btn-group">
                        <div className="btn-group__icon">
                            <button className="btn-group__save"><i className="far fa-save" /></button>
                        </div>
                        <div className="btn-group__icon">
                            <button className="btn-group__edit" onClick={this.editHandler.bind(this)}><i className="far fa-edit" /></button>
                        </div>
                        <div className="btn-group__icon">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.deleteHandler.bind(this)}><span aria-hidden="true">&times;</span></button>
                        </div>
                    </div>
                </div>
                <div className="list-group__empty" />
            </div>
        );

        const SortableList = SortableContainer(({items}: {items: string[]}) => {
            return (
                <div className="list-group">
                    {items.map((value, index) => (
                        <SortableItem key={`item-${index}`} index={index} value={value} />
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
                { this.state.items != 0
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
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };
}
