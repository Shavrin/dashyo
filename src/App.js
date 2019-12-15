import React from 'react';
import { useSelector } from 'react-redux';
import Window from './Window';
import Sidebar from './Sidebar';

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
          {windows.map(window =>
          <Window
            key={window.id}
            id={window.id}
            pos={window.position}
          >

          </Window>)}
      </main>
      <Sidebar></Sidebar>
    </React.Fragment>
  );
}

export default App;
