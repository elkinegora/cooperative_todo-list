import * as React from "React";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import "./drag-drop.scss";

const tasks = require('./tasks.json');

interface Item {
    id: number;
    title: string;
    body: string;
}

export interface ExampleState {
    items: Item[];
}


export default class DndExample extends React.Component<{}, { items:any }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            items: tasks.tasks,
        };

        this.itemRenderer = this.itemRenderer.bind(this);
        this.handleRLDDChange = this.handleRLDDChange.bind(this);
    }

    render() {
        const items = this.state.items;
        return (
            <RLDD
                cssClasses="example"
                items={items}
                itemRenderer={this.itemRenderer}
                onChange={this.handleRLDDChange}
            />
        );
    }

    private itemRenderer(item: Item, index: number): JSX.Element {
        return (
            <div className="item">
                <p className="title">{item.title}</p>
                <p className="body">{item.body}</p>
                <div className="small">
                    item.id: {item.id} - index: {index}
                </div>
            </div>
        );
    }

    private handleRLDDChange(reorderedItems: Array<Item>) {
        this.setState({ items: reorderedItems });
    }

}
