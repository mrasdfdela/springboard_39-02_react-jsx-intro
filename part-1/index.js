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

const AlertComponent = ( {text,alertType}) => {
  const alertClass = "alert alert-" + alertType;
  return (
    <div className={alertClass}>
      <p>{text}</p>
    </div>
  );
}

const ButtonComponent = ( {text,btnType}) => {
  const btnClass = "btn btn-" + btnType;
  return (
    <div>
      <button type="button" class={btnClass}>
        {text}
      </button>
    </div>
  );
}

const CardComponent = ( {title,text}) => {
  return (
    <div className="card">
      <div classNAme="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <ButtonComponent text="Update User" btnType="primary" />
        <ButtonComponent text="Delete User" btnType="danger" />
      </div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <AlertComponent text="Danger, Will Robinson!" alertType="danger" />
      <FirstComponent />
      <NamedComponent name="Will Robinson" />
      <CardComponent title="Travel log 0.0.1" text="I am hungry" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));