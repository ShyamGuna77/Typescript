
import Header from "./components/Header";
import Goals from "./assets/goals.jpg"
import { useState } from "react";
import CourseGaolList from "./components/CourseGaolList";
import NewGoal from "./components/NewGoal";


export type CourseGoals = {
  title:string;
  id:number;
  description:string

}

export default function App() {
  const [goals,setGoals] = useState<CourseGoals[]>([])


  function handleGoals(goal:string,summary:string){
    setGoals(prevGoals => {
      const newGoal:CourseGoals ={
        title:goal,
        description:summary,
        id:Math.random()

      }
      return [...prevGoals,newGoal]
    })
  }

  function handleDelete(id:number){
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id!==id))
  }
  return (
    <>
      <main>
        <Header image={{ src: Goals, alt: "Goals Image" }}>
          <h1>Your Goals</h1>
        </Header>

       <NewGoal onAddGoal={handleGoals} />
       <CourseGaolList goals={goals} onDeleteGoal={handleDelete} />
      </main>
    </>
  );
}
