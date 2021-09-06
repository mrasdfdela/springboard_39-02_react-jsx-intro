const Tweet = ({username, name, date, message}) => {
  return (
    <div>
      <h1>@{username}</h1>
      <h3>{message}</h3>
      <p>{name}, {date}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Tweet 
        username="jerrysusername" 
        name="Jerry" 
        date="09/06/21" 
        message="Today is labor day"
      />
      <Tweet 
        username="otherusername" 
        name="Other" 
        date="09/06/21" 
        message="Today is Monday"
      />
      <Tweet 
        username="lastusername" 
        name="User" 
        date="09/06/21" 
        message="Today is the 6th"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
