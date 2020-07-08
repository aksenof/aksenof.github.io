import * as React from "react";
import Degs from './Degs';
import styled from 'styled-components'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: auto;
`;

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input`
  width: ${props => props.output ? "170px" : "310px"};
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exps: 1,
      data: 'Мы связаны!'
    }
  }

  click(evt) {
    evt.preventDefault()
    this.setState(({exps}) => ({
      exps: +exps + 1
    }));
  }

  changeDeg(v) {
    this.setState({exps: v});
  }

  changeInput(e) {
    this.setState({data: e.target.value});
  }

  render() {
    return (
        <StyledSection>
          <form>
            <Input type="text"
                   value={this.state.data}
                   onChange={this.changeInput.bind(this)}/>
            <br/>
            <Input type="text"
                   value={this.state.data}
                   onChange={this.changeInput.bind(this)}/>
            <br/>
            <br/>
            <Button
                onClick={this.click.bind(this)}>Добавить
            </Button>
            <Input type="text"
                   value={this.state.exps}
                   onChange=
                       {({target: {value: v}}) => this.changeDeg(v)}
                   output="output"
            />
            <Degs
                a={Array.from({
                  length: this.state.exps
                }, (v, i) => 10 + i)}/>
          </form>
        </StyledSection>
    )
  }
}

export default App;

