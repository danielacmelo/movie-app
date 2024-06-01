// import './App.css'
import AppRouter from './routers/AppRouter'
import { store } from './store/store.js'
import { Provider } from 'react-redux'

import './styles/styles.scss'
 
function App() {

  return (
    <>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </>
  )
}

export default App
