import { createContext,useContext,useReducer,type ReactNode } from "react";

type Timer = {
    name:string;
    duration:number;
}
type TimersState = {
    isRunning:boolean;
    timers:Timer []
}

const intialState : TimersState = {
    isRunning:true,
    timers:[]
}

type  TimersContextValue = TimersState & {
    addTimer :(timerData:Timer) => void ,
    startTimer : () => void,
    stopTimer: () => void ,
}




  const TimersContext = createContext<TimersContextValue | null >(null)

  export function useTimersContext (){
   const timerCtx =   useContext(TimersContext)

   if(timerCtx === null){
       throw new Error('useTimersContext must be used within a TimersContextProvider')
   }
   return timerCtx;
  }

type timersContextProvider = {
    children : ReactNode
}


type AddTimeraction = {
    type:'ADD_TIMER',
    payload:Timer;
}

type startTimerAction = {
    type:'START_TIMER'
}

type stopTimerAction = {
    type:'STOP_TIMER'
}
 

type ActionState = AddTimeraction | startTimerAction | stopTimerAction;

function timersReducer(state:TimersState,action:ActionState):TimersState{
switch(action.type){
    case 'ADD_TIMER':
        return {
            ...state,
            timers:[...state.timers, {name: action.payload.name, duration: action.payload.duration}]
        }
        case 'START_TIMER':
            return {
                ...state,
                isRunning:true
            }
            case 'STOP_TIMER':
                return {
                    ...state,
                    isRunning:false
                }
                default:
                    return state
}
}


  export default function TimersContextProvider ({children}:timersContextProvider){

 const [state,dispatch]  =useReducer(timersReducer,intialState)

    const ctx : TimersContextValue = {
        timers: state.timers,
        isRunning: state.isRunning,
        addTimer(timerData){
         dispatch({type:'ADD_TIMER', payload: timerData})
        },
        startTimer(){
  dispatch({type:'START_TIMER'})
        },
        stopTimer(){
   dispatch({type:'STOP_TIMER'})
        }
    }
   return <TimersContext.Provider value={ctx}>
    {children}
   </TimersContext.Provider>
  }

  