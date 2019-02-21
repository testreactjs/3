import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.sass';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './pages/index';

const unsubscribe = store.subscribe(() => console.log('Change store', store.getState()));
// delete!
unsubscribe();
class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
