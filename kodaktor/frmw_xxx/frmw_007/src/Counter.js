import React, {Component as C} from 'react';

import styled from 'styled-components'

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
  cursor: pointer;
  border: 2px solid brown;
  &:active {
        background: antiquewhite;
    }
  }
`;

class Counter extends C {
    constructor(props) {
        super(props);
        const {stars} = props;
        this.state = {
            stars
        };
    }

    componentWillReceiveProps(props) {
        if (this.props.stars !== props.stars) {
            console.log(parseInt(props.stars));
            this.setState({
                stars: parseInt(props.stars)
            });
        }
    }

    plus() {
        const stars = +this.state.stars + 1;
        this.setState({stars});
    }

    render() {
        return (
            <div>
                <h3>Стармейкер</h3>
                <hr/>
                <Button onClick={() => this.plus()}>
                    <span role="img" aria-label="add">+</span>
                </Button>
                <Stars length={this.state.stars}/>
            </div>
        );
    }
}

const Stars = ({length}) => <span>{Array.from({length}, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default Counter;