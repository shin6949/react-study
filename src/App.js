import { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollbox=ref} />
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}

export default App;