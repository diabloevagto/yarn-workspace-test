import { Link, Route, Switch } from 'react-router-dom';

import { DEFAULT_NAME } from 'src/constants';
import useStore from 'src/hooks/useStore';

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
