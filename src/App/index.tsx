import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FallBackState, Main } from './app';

/**
 * The main component of the application.
 */
const App = () => {
  const loading = false;
  const error = { massage: 'error' };
  const data = [1];
  return (
    <Main>
      {loading ? <FallBackState>Loading...</FallBackState> : null}
      {!loading && !data.length && error ? (
        <FallBackState>
          Error:{' '}
          {(error as { massage: string })?.massage ||
            'Something went wrong, please refresh your page'}
        </FallBackState>
      ) : null}
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<FallBackState>Loading...</FallBackState>}>
              <div>Hell</div>
            </Suspense>
          }
        />
      </Routes>
    </Main>
  );
};

export default App;
