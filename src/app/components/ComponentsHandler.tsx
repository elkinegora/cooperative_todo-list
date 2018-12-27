import * as React from "react"

export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, {}> {
    render(){
        return(
            <div className="content__container container">
                <div className="row">
                    <div className="card col-lg-12">
                        <div className="card-body">
                            <h1 className="card-title text-center mb-5">Кооперативный Todo-list</h1>
                            <div className="input-group mb-5">
                                <input type="text" className="form-control" placeholder="Текст новой задачи"
                                       aria-label="Текст новой задачи" aria-describedby="btn-add" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button"
                                                id="btn-add">Добавить
                                        </button>
                                    </div>
                            </div>
                            <h2>Список задач</h2>
                            <div className="list-group">
                                <div className="list-group__item">
                                    <div className="list-group__head">
                                        <div className="list-group__title">
                                            <div className="btn-group">
                                                <button className="btn-group__complete"><i
                                                    className="fas fa-arrows-alt"></i></button>
                                            </div>
                                            Задача с вложенностями
                                        </div>
                                        <div className="btn-group">
                                            <div className="btn-group__icon">
                                                <button className="btn-group__edit"><i className="far fa-edit"></i>
                                                </button>
                                            </div>
                                            <div className="btn-group__icon">
                                                <button type="button" className="close" data-dismiss="alert"
                                                        aria-label="Close"><span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group__empty"></div>
                                    <div className="list-group__subgroup">
                                        <div className="list-group__item">
                                            <div className="list-group__head">
                                                <div className="list-group__title">
                                                    <div className="btn-group">
                                                        <button className="btn-group__complete"><i
                                                            className="fas fa-arrows-alt"></i></button>
                                                    </div>
                                                    Новая задача
                                                </div>
                                                <div className="btn-group">
                                                    <div className="btn-group__icon">
                                                        <button className="btn-group__edit"><i
                                                            className="far fa-edit"></i></button>
                                                    </div>
                                                    <div className="btn-group__icon">
                                                        <button type="button" className="close" data-dismiss="alert"
                                                                aria-label="Close"><span
                                                            aria-hidden="true">&times;</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group__empty"></div>
                                        </div>
                                        <div className="list-group__item">
                                            <div className="list-group__head">
                                                <div className="list-group__title">
                                                    <div className="btn-group">
                                                        <button className="btn-group__complete"><i
                                                            className="fas fa-arrows-alt"></i></button>
                                                    </div>
                                                    Новая задача #2
                                                </div>
                                                <div className="btn-group">
                                                    <div className="btn-group__icon">
                                                        <button className="btn-group__edit"><i
                                                            className="far fa-edit"></i></button>
                                                    </div>
                                                    <div className="btn-group__icon">
                                                        <button type="button" className="close" data-dismiss="alert"
                                                                aria-label="Close"><span
                                                            aria-hidden="true">&times;</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-group__empty"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group__item list-group-item-action">
                                    <div className="list-group__head">
                                        <div className="input-group">
                                            <input type="text" className="form-control" value="Текст новой задачи" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-secondary" type="button"
                                                            id="btn-update">Обновить
                                                    </button>
                                                </div>
                                        </div>
                                        <div className="btn-group"></div>
                                    </div>
                                    <div className="list-group__empty"></div>
                                </div>
                                <div className="list-group__item">
                                    <div className="list-group__head list-group--completed"> Завершенная задача
                                        <div className="btn-group">
                                            <div className="btn-group__icon">
                                                <button className="btn-group__edit"><i className="fas fa-redo"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group__empty"></div>
                                </div>
                            </div>
                            <div className="link-group text-center"><a href="#" className="link-group__item">Все
                                задачи <span className="badge badge-primary badge-pill">14</span></a> <a href="#"
                                                                                                         className="link-group__item">Активные <span
                                className="badge badge-primary badge-pill">8</span></a> <a href="#"
                                                                                           className="link-group__item">Выполнено <span
                                className="badge badge-primary badge-pill">6</span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}