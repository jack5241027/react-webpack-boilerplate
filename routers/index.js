import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from '../client/containers/pages/index/index'
// import {HandleTheme} from '../client/components/theme/HandleTheme'

export default (
  <Route path="/">
    <IndexRoute component={Index} />
        { /* Home (main) route */ }
    <Route path="home" component={Index}>
        { /* Routes */ }
      <IndexRoute component={Index} />
    </Route>
  </Route>
)
