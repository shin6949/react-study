import LifeCycleSample from './LifeCycleSample';
import { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
    /* 16777215에 대한 탐구
        16,777,215를 보고 뭔가 이상할 수 있지만, 이건 16진수 ffffff를 10진수로 변경한 것이다.
        Math.random() -> 0~1 사이의 난수를 반환
        반환 받은 값에 16,777,215를 곱하면 0~16,777,215 사이의 값이 나오게 된다. toString으로 16진수로 변환하는 것.
        즉, Math.random()이 0~1 사이를 반환한다는 확실함이 있기 때문에 가능했던 것
     */
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
        color: '#000000'
    };

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;