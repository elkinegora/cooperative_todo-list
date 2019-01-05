import * as React from "react";
import VerstkaExample from "../TestFolder/verstka-example";
import SortableComponent from "./smooth-drag-and-drop/smooth-dnd";

export default class TasksList extends React.Component<TasksListProps, TasksListStates> {

    render() {
        return (
            <React.Fragment>
                <SortableComponent />
                <h2>Список задач</h2>
                <div className="list-group">
                    { this.props.items != 0
                        ? this.props.items.map((item:any, index:any) =>
                            <React.Fragment key={index}>
                                <div className="list-group__item">
                                    <div className="list-group__head">
                                        <div className="list-group__title">
                                            <div className="btn-group">
                                                <button className="btn-group__complete"><i className="fas fa-arrows-alt" /></button>
                                            </div>
                                            { item }
                                        </div>
                                        <div className="btn-group">
                                            <div className="btn-group__icon">
                                                <button className="btn-group__edit"><i className="far fa-edit" /></button>
                                            </div>
                                            <div className="btn-group__icon">
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.props.onClose.bind(this, index)}><span aria-hidden="true">&times;</span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group__empty" />
                                </div>
                            </React.Fragment>)
                        : <React.Fragment>
                            <p className="userGreeter" >Приветствуем тебя пользователь! Добавь новую задачу :)</p>
                        </React.Fragment> }
                </div>
                {/*Компонент VerstkaExample нужен исключительно для примера верстки которая была создана на начальных этапах
                 Для того чтобы использовать его, надо раскомментировать компонент VerstkaExample ниже под этим комментарием */}
                {/*<VerstkaExample />*/}
            </React.Fragment>
        );
    }
}
