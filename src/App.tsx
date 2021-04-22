import IMAGE from '../react_logo.png';
import "./style.css";
export const App = () => {
  return <>
    <h1>React Typescript webpack template - {process.env.NODE_ENV} {process.env.name} </h1>
    <img src={IMAGE} alt="React Logo" width={600} height={400} />
  </>;
}