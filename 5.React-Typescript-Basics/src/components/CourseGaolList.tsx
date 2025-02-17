

import CourseGoal from "./CourseGoal";
import { CourseGoals } from "../App";

type GoalsData = {
    goals : CourseGoals[]
}



function CourseGaolList({goals}:GoalsData) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}

export default CourseGaolList