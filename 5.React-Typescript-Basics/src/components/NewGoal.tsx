import { useRef, type FormEvent } from "react";

type NewGoalProps  = {
    onAddGoal :(goal:string,summary:string) => void
}
function NewGoal({onAddGoal}:NewGoalProps) {

    const gaol = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleFormSubmit(event:FormEvent<HTMLFormElement>){
      event.preventDefault();
      const enterdeGoal = gaol.current!.value;
      const enteredSummary = gaol.current!.value;

      event.currentTarget.reset()
      onAddGoal(enterdeGoal,enteredSummary)
    }

  return (
    <form onSubmit={handleFormSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref= {gaol} />
      </p>

      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref = {summary}/>
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal