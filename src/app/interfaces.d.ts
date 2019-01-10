interface Item {
    id: number;
    title: string;
    completed: boolean;
    readonly: boolean;
    className: string;
}

interface ComponentsHandlerState {}
interface ComponentsHandlerProps {}
interface InputFieldProps {}
interface InputFieldState {
    term: string;
    items: Item[];
}
interface TasksStatesProps {}
interface TasksStatesState {}