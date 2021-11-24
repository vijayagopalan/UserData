
import React from 'react';
import store from './Features/user';
import { Provider } from 'react-redux';
import Container from './app/Container';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Container/>
      </Provider>
      
    </div>
  );
}

export default App;
