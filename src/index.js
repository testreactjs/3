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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
