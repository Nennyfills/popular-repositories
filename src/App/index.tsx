import { apiUrl } from '@/constants/default';
import { useFetch } from '@/hooks';
import { Repositories } from '@/pages';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { FallBackState, Main } from './app';

/**
 * The main component of the application.
 */
const App = () => {
  const url = process.env.REACT_APP_API_URL || apiUrl;

  const { loading, error, data } = useFetch(url);

  return (
    <Main>
      {loading ? <FallBackState>Loading...</FallBackState> : null}
      {!loading && !data && error ? (
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
              <Repositories />
            </Suspense>
          }
        />
      </Routes>
    </Main>
  );
};

export default App;
