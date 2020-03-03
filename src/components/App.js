import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import ArticleList from "./ArticleList";

const ErrorPage = () => <h1>Strona nie istnieje</h1>;

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <Router>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/articles" activeClassName="article">
                    ARTICLES
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section className="section">
            <Switch>
              {/* Switch - powoduje że jak react route znajdzie odpowiednią ścieżkę to nie poszukuje więcej*/}
              {/* exact - domyślnie jest true, znaczy dokładnie taki sam*/}
              <Route path="/" component={ArticleList} />
              <Route component={ErrorPage} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
