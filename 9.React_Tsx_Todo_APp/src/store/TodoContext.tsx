

import React, { createContext, useReducer, ReactNode } from 'react';

type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

type TodoState = {
    todos: Todo[];
}

type TodoAction = 
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'REMOVE_TODO'; payload: string };

type TodoContextProps = {
    state: TodoState;
    dispatch: React.Dispatch<TodoAction>;
}

const initialState: TodoState = {
    todos: []
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
};

export const TodoContext = createContext<TodoContextProps | undefined>(undefined);

type TodoProviderProps = {
    children: ReactNode;
};

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};