const Person = ({name, age, hobbies}) => {
  const msgVote = age >= 18? "please go vote!" : "you must be 18";
  const msgName = name.length > 6 ? name.slice(0,6) : name;
  return (
    <div>
      <h1>Hello, {msgName}</h1>
      <h3>{msgVote}</h3>
      <ul>
        { hobbies.map( h => <li>{h}</li> ) }
      </ul>
    </div>
  );
}

const App = () => {
  const jerry = <Person 
    name="Jerry" 
    age="35" 
    hobbies={["cycling","basketball","coding"]}
  />
  
  return (
    <div>
      {jerry}
      {jerry}
      {jerry}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
