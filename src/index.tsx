import { render } from "react-dom"
import "./index.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "pages/MainPage/MainPage"
import NotFoundPage from "pages/NotFoundPage/NotFoundPage"
import store from "./store"
import { Provider } from "react-redux"
render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <MainPage />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
)
