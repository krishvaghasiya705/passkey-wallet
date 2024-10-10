import { RouterProvider } from 'react-router-dom';
import './Global.scss';
import router from './routes';
// import CustomCursor from './components/cursor/CustomCursor';

function App() {

  return (
    <>
      {/* <CustomCursor /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;