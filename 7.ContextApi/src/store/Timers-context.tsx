import { createContext,type ReactNode } from "react";

type Timer = {
    name:string;
    duration:number;
}
type TimersState = {
    isRunning:boolean;
    timers:Timer []
}

type  TimersContextValue = TimersState & {
    addTimer :(timerData:Timer) => void ,
    startTimer : () => void,
    stopTimer: () => void ,
}

 export  const TimersContext = createContext<TimersContextValue | null >(null)

type timersContextProvider = {
    children : ReactNode
}


  export default function TimersContextProvider ({children}:timersContextProvider){
    const ctx : TimersContextValue = {
        timers:[],
        isRunning:false,
        addTimer(timerData){

        },
        startTimer(){

        },
        stopTimer(){

        }
    }
   return <TimersContext.Provider value={ctx}>
    {children}
   </TimersContext.Provider>
  }