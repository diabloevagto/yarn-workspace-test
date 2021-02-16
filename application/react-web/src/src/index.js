import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import { WrapContext } from 'src/store';
import Auth from 'src/page/Auth';
import GlobalStyles from 'src/style/GlobalStyles';
import history from 'src/utils/history';
import theme from 'src/style/theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <WrapContext>
        <GlobalStyles />
        <Auth>
          <App />
        </Auth>
      </WrapContext>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
