interface Item {
    id: number;
    title: string;
    completed: boolean;
    readonly: boolean;
    invisible: boolean;
}

interface ComponentsHandlerState {}
interface ComponentsHandlerProps {}
interface ToDoListProps {}
interface ToDoListState {
    term: string;
    items: Item[];
}
interface TasksStatesProps {
    items: Item[];
    showActiveTasks: any;
}
interface TasksStatesState {}

interface ListTaskProps {
    items: any;
    onChangeItemTask: any;
    deleteTask: any;
    editTask: any;
    saveTask: any;
    completedTask: any;
}
interface ListTaskState {
    items: any;

}
interface ItemTaskProps {
    item: any;
    index: number;
    onChangeItemTask: any;
    deleteTask: any;
    editTask: any;
    saveTask: any;
    completedTask:any;
}
interface ItemTaskState{
    item: any;
}
