

import CourseGoal from "./CourseGoal";
import { CourseGoals } from "../App";

type GoalsData = {
    goals : CourseGoals[],
    onDeleteGoal:(id:number)=>void
}



function CourseGaolList({goals,onDeleteGoal}:GoalsData) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete= {onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGaolList