//App component dynamic counter

class Button extends React.Component {
    constructor(props) {
    super(props);
    }
    
        render() {
          return (
          <button onClick={()=>this.props.handleClick(this.props.incrementValue)}>+{this.props.incrementValue}</button>
        );
      }
    }
    
    const Result = (props) => {
        return (
      <div>{props.counter}</div>
      );
    };
    
    
    class App extends React.Component {
    state = { counter : 0 };
    
    handleClick = (incrementValue) => {
        this.setState((prevState) => ({
        counter : prevState.counter + incrementValue
        }));
    
    };
    
        render() {
          return (
            <div>
              <Button incrementValue={1} handleClick={this.handleClick}/>
              <Button incrementValue={5} handleClick={this.handleClick}/>
              <Button incrementValue={10} handleClick={this.handleClick}/>
              <Button incrementValue={100} handleClick={this.handleClick}/>
            <Result counter={this.state.counter}/>
          </div>
        );
      }
    }
    
    ReactDOM.render(<App />, mountNode);