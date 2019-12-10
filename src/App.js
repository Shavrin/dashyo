import React from 'react';
import { useSelector } from 'react-redux';
import Window from './Window';

function App() {
  const windows = useSelector(state => state.windows);
  const styles = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    border: '5px solid white'
  };


  return (
    <React.Fragment>
      <main style={styles}>
        {windows.map(window => <Window key={window.id}></Window>)}
      </main>
    </React.Fragment>
  );
}

export default App;
