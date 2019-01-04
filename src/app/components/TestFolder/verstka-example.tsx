import * as React from "React";

export default class VerstkaExample extends React.Component<{},{}> {
    render() {
        return (
            <React.Fragment>
                <div className="list-group">
                    <div className="list-group__item">
                        <div className="list-group__head">
                            <div className="list-group__title">
                                <div className="btn-group">
                                    <button className="btn-group__complete"><i className="fas fa-arrows-alt" /></button>
                                </div>
                                Задача с вложенностями
                            </div>
                            <div className="btn-group">
                                <div className="btn-group__icon">
                                    <button className="btn-group__edit"><i className="far fa-edit" /></button>
                                </div>
                                <div className="btn-group__icon">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="list-group__empty" />
                        <div className="list-group__subgroup">
                            <div className="list-group__item">
                                <div className="list-group__head">
                                    <div className="list-group__title">
                                        <div className="btn-group">
                                            <button className="btn-group__complete"><i className="fas fa-arrows-alt" /></button>
                                        </div>
                                        Новая задача
                                    </div>
                                    <div className="btn-group">
                                        <div className="btn-group__icon">
                                            <button className="btn-group__edit"><i className="far fa-edit" /></button>
                                        </div>
                                        <div className="btn-group__icon">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group__empty" />
                            </div>
                            <div className="list-group__item">
                                <div className="list-group__head">
                                    <div className="list-group__title">
                                        <div className="btn-group">
                                            <button className="btn-group__complete"><i className="fas fa-arrows-alt" /></button>
                                        </div>
                                        Новая задача #2
                                    </div>
                                    <div className="btn-group">
                                        <div className="btn-group__icon">
                                            <button className="btn-group__edit"><i className="far fa-edit" /></button>
                                        </div>
                                        <div className="btn-group__icon">
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group__empty" />
                            </div>
                        </div>
                    </div>
                    <div className="list-group__item list-group-item-action">
                        <div className="list-group__head">
                            <div className="input-group">
                                <input type="text" className="form-control" value="Текст новой задачи" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button" id="btn-update">Обновить</button>
                                </div>
                            </div>
                            <div className="btn-group" />
                        </div>
                        <div className="list-group__empty" />
                    </div>
                    <div className="list-group__item">
                        <div className="list-group__head list-group--completed"> Завершенная задача
                            <div className="btn-group">
                                <div className="btn-group__icon">
                                    <button className="btn-group__edit"><i className="fas fa-redo" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="list-group__empty" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
