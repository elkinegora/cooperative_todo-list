interface Item {
    id: number;
    title: string;
    completed: boolean;
    readonly: boolean;
}

interface ComponentsHandlerState {}
interface ComponentsHandlerProps {}
interface ToDoListProps {}
interface ToDoListState {
    term: string;
    items: Item[];
}
interface TasksStatesProps {}
interface TasksStatesState {}

interface ListTaskProps {
    items: any;
    deleteTask: any;
}
interface ListTaskState {
    items: any;

}
interface ItemTaskProps {
    item: any;
    key: number;
    deleteTask: any;
}
interface ItemTaskState{
    item: any;
}
