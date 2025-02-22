import Container from './UI/Container.tsx';



type TimersProps ={
    name:string;
    duration:number;
}
export default function Timer({name,duration}:TimersProps) {
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
