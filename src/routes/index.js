import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Page1 from '../views/page1'
import Page2 from '../views/page2'
import Page3 from '../views/page3'
import Page4 from '../views/page4'

export default () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
      </Switch>
    </Layout>
  )
}
