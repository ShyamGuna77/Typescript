import {type  ReactNode } from "react";

interface CourseProps {
  title: string;
  id:number;
  onDelete:(id:number) => void
  children:ReactNode
}

const CourseGoal: React.FC<CourseProps> = ({ title,id, children,onDelete}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
         {children}
        
      </div>
      <button onClick={()=> onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;