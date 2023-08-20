import { Outlet } from 'react-router-dom';
import Naves from './Naves';
import Title from './Title';

const MainLayout = () => {
  return (
    <div>
      <Title />
      <Naves />
      <Outlet />
    </div>
  );
};

export default MainLayout;
