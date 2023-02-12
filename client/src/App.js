import '../src/styles/global.scss';

import MainContainer from './components/features/MainContainer/MainContainer';
import Navi from './components/view/Navigation/Navi';

import { useRoutes } from 'react-router-dom';

function App() {

  const routes = useRoutes([
    {
      path: '/',
      element: <Navi/>
    }
  ])
  return (
    <MainContainer>
      {routes}
    </MainContainer>
  );
}

export default App;
