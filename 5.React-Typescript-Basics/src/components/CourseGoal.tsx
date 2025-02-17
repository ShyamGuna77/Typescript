import {type  ReactNode } from "react";

interface CourseProps {
  title: string;
  description: string;
  children:ReactNode
}

const CourseGoal: React.FC<CourseProps> = ({ title, description}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;