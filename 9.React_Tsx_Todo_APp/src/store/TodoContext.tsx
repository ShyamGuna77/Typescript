import { createContext, useContext } from "react";
import { useReducer } from "react";


type Todo = {
    id:number;
    text:string;
    completed:boolean;
}

type TodoState  = {
    todos :Todo [];
}
type TodoAction = 
| {type:'ADD_TODO';payload:string}
| {type:'DELETE_TODO';payload:number}
| {type:'EDIT_TODO';payload:{id:number,text:string}}
| {type:'TOGGLE_TODO';payload:number}
| {type:'DELETE_ALL';payload:string};

const TodoContext = createContext<{ state: TodoState; dispatch: React.Dispatch<TodoAction> } | undefined>(undefined);

const todoReducer = (state:TodoState,action:TodoAction):TodoState => {
   switch(action.type){
    case 'ADD_TODO':
        return {todos:[...state.todos,{id:state.todos.length+1,text:action.payload,completed:false}]};

        case 'DELETE_TODO':
            return {todos:state.todos.filter(todo => todo.id!== action.payload)}

        case 'EDIT_TODO':
            return {todos:state.todos.map(todo => todo.id === action.payload.id ? {...todo,text:action.payload.text}:todo)}

        
        case 'TOGGLE_TODO':
            return {todos:state.todos.map(todo => todo.id === action.payload ? {...todo,completed:!todo.completed}:todo)
        }   
        case 'DELETE_ALL':
            return {todos:state.todos.filter(todo => todo.completed === false)}
    }
}




export const TodoProvider = ({children}: {children:React.ReactNode}) => {
    const initialState: TodoState = { todos: [] };
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext);