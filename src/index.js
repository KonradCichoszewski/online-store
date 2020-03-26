import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store.js'
import Root from './Root.js'

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));