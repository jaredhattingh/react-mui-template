import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './Components/ErrorBoundary';
import Loading from './Components/Loading';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<Loading />}>
          <App />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  </React.StrictMode>,

  document.getElementById('root')
);
