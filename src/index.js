import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.sass';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './pages/index';


class Main extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
