import {type  ReactNode } from "react";

interface CourseProps {
  title: string;
  children:ReactNode
}

const CourseGoal: React.FC<CourseProps> = ({ title, children}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
         {children}
        
      </div>
      <button>Delete</button>
    </article>
  );
}

export default CourseGoal;