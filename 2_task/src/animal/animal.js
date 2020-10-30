import("./animal.css");

const greetingText = (name) => {
  alert(`Hello my name is ${name}. nice to meet you`);
};
const Animal = (props) => {
  return (
    <div class="animal-card">
      <h1> {props.name} </h1>
      <img alt={props.name} src={props.img}></img>
      <button onClick={() => greetingText(props.name)}>Click Me </button>
    </div>
  );
};

export default Animal;
