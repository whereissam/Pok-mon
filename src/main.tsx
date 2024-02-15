import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Theme appearance="dark">
    <App />
  </Theme>,
);
