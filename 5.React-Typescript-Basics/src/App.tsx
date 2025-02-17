
import Header from "./components/Header";
import Goals from "./assets/goals.jpg"
import { useState } from "react";
import CourseGaolList from "./components/CourseGaolList";


export type CourseGoals = {
  title:string;
  id:number;
  description:string

}

export default function App() {
  const [goals,setGoals] = useState<CourseGoals[]>([])


  function handleGoals(){
    setGoals(prevGoals => {
      const newGoal:CourseGoals ={
        title:"Learn React Toady",
        description:"Finish It fastly asap",
        id:Math.random()

      }
      return [...prevGoals,newGoal]
    })
  }
  return (
    <>
      <main>
        <Header image={{ src: Goals, alt: "Goals Image" }}>
          <h1>Your Goals</h1>
        </Header>

        <button onClick={handleGoals}>Add Goals</button>
       <CourseGaolList goals={goals} />
      </main>
    </>
  );
}
