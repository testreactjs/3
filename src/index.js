import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/index.sass';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App';
import * as actions from './redux/actions'

class Main extends React.Component {
  componentWillMount() {
    store.dispatch(actions.fetchStaffMembersAction())
  }
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
