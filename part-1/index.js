const FirstComponent = () => {
  return (
    <h1>My very first component</h1>
  );
}

const NamedComponent = ({name}) => {
  return (
    <p>My name is {name}</p>
  );
}

const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Jerry"/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));