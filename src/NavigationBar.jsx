import Home from "./Home";
import About from "./About";

const NavigationBar = () => {
  return (
    <div>
      <a href="https://github.com/prasad-kancharla">
        <u>Home</u>
      </a>
      &nbsp;
      <a href="https://www.linkedin.com/in/kdgkaliprasad">
        <u>About</u>
      </a>
      &nbsp;
      <a href="http://localhost:3000">
        <u>Settings</u>
      </a>
      <Home name="Prasad"></Home>
      <About title="First React App"></About>
    </div>
  );
};

export default NavigationBar;
