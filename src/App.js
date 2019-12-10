import React from 'react';
import store from './store/index';
import { addWindow, closeWindow } from './actions/index';

function App() {
  store.subscribe(()=>{console.log(store.getState().windows)});
  store.dispatch( addWindow({
    id: store.getState().windows.length,
    title: 'basic window'
  }));

  store.dispatch(closeWindow(0));
  const styles = {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    border: '5px solid white'
  };

  return (
    <React.Fragment>
      <main style={styles}>
       options
      </main>
    </React.Fragment>
  );
}

export default App;
