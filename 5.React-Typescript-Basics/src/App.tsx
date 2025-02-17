import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import Goals from "./assets/goals.jpg"
import { useState } from "react";


type CourseGoals = {
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
        <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title= {goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
          
        ))}
        </ul>
      </main>
    </>
  );
}
