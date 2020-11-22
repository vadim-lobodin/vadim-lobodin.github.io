import React, {Component} from 'react';
import styled from 'styled-components';
import { Btn} from './Styled';


class App extends Component {
  render() {
    return (
    <div className="App">
        <Section>
          <h3>Button Styles</h3>
            <Btn color="black">Label</Btn>
            <Btn color="gray050">Label</Btn>
          <h3>Button Sizes</h3>
          <Btn color="black" size="lg">Label</Btn>
          <Btn color="black">Label</Btn>
          <Btn color="black" size="sm">Label</Btn>
        </Section>
    </div>
    );
  }
}

const Section = styled.section`
  margin: 100px 30px;

`

export default App
