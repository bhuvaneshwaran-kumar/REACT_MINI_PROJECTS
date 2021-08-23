import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

const store = createStore(
    reducers
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const storeProvider = ({ children }) => <Provider store={store}>{children}</Provider>


export default storeProvider