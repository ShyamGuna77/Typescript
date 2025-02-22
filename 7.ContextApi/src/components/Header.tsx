import { useContext } from 'react';
import Button from './UI/Button.tsx';
import { TimersContext } from '../store/Timers-context.tsx';

export default function Header() {

  const timersCtx = useContext(TimersContext);

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button>Stop Timers</Button>
    </header>
  );
}
