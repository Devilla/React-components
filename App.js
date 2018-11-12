// Write JavaScript here and press Ctrl+Enter to execute

class Button extends React.Component {
    constructor(props) {
    super(props);
    }
    
        render() {
          return (
          <button onClick={this.props.handleClick}>+1</button>
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
    
    handleClick = () => {
        this.setState((prevState) => ({
        counter : prevState.counter + 1
        }));
    };
    
        render() {
          return (
            <div>
              <Button handleClick={this.handleClick}/>
            <Result counter={this.state.counter}/>
          </div>
        );
      }
    }
    
    ReactDOM.render(<App />, mountNode);