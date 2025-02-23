import { useTimersContext } from '../store/Timers-context.tsx';
import Container from './UI/Container.tsx';
import { useEffect, useRef, useState } from 'react';


type TimersProps ={
    name:string;
    duration:number;
}
export default function Timer({name,duration}:TimersProps) {

  const inputInterval = useRef<number | null>(null)
 const [remainingTime,setRemainingTime] = useState(duration*1000)

 const {isRunning} = useTimersContext()

 if(remainingTime<= 0 && inputInterval.current) {
 clearInterval(inputInterval.current)
 }

 useEffect(()=>{
  let interval:number
  if(isRunning){

     interval = setInterval(()=>{
      setRemainingTime(prevTime => prevTime-50)
    },50)
    inputInterval.current = interval;
  } else if (inputInterval.current ){
    clearInterval(inputInterval.current)
  }

   return ()=>clearInterval(interval)  
 },[isRunning])

 const formattedTime = (remainingTime/1000).toFixed(2)
 
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max = {duration*1000} value={remainingTime} /> </p>
      <p>{formattedTime}</p>
    </Container>
  );
}
