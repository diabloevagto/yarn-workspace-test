import { Link, Route, Switch } from 'react-router-dom';
import { useStore } from 'packages-hooks';
import React from 'react';

import { DEFAULT_NAME } from 'src/constants';

export default function App() {
  const { userId } = useStore();
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/a">a</Link>
            </li>
            <li>
              <Link to="/b">b</Link>
            </li>
          </ul>
        </nav>
      </header>
      <h3>{DEFAULT_NAME}</h3>
      <p>user: {userId}</p>
      <Switch>
        <Route exact path="/a" component={() => <h1>A</h1>} />
        <Route exact path="/b" component={() => <h1>B</h1>} />
      </Switch>
    </div>
  );
}
