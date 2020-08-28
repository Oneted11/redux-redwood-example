import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Provider } from 'react-redux'
import store from './store'

import Routes from 'src/Routes'

import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <Provider store={store}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </Provider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
