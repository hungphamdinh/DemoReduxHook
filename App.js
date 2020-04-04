import React from 'react';
import MainScreen from './MainScreen'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'

const App = () => {



const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

return(
<Provider store={store}>
  <MainScreen />
  </Provider>
  )

}
export default App