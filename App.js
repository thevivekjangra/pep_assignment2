import React, { useState } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Segment textAlign='center' style={{ padding: '130px', width:'100wh' , height:'100vh', backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:828/0*nvvPWlrPpX2e_Vkn)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity: '0.8' }}>
      <Header as='h1'style={{padding : '30px', color: 'yellow'}}>COUNTER APPLICATION USING useState()</Header>
      <Segment textAlign='center' style={{ padding: '40px', boxShadow: '#ccc',height: '55%',width: '40%', left : '373px' }}>
        <Header as='h2'>Count</Header>
        <h1>{count}</h1>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button color='green' content='Increment' onClick={increment}/>
            </Grid.Column>
            <Grid.Column>
              <Button color='red' content='Decrement' disabled={count === 0} onClick={decrement} />
            </Grid.Column>
            <Grid.Column>
              <Button color='blue' content='Reset' disabled={count === 0} onClick={reset} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h2' style={{padding : '70px', right :'9px', color: 'yellow'}}>Done by : Vivek Sharma - 12013688 </Header>
    </Segment>
  );
};

export default App;