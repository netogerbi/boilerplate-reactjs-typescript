import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../hooks/user';

interface IRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
}

const PrivateRoute: React.FC<IRouteProps> = (props: IRouteProps) => {
  const { component: Component } = props;

  const { token } = useUser();

  return token ? <Component /> : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
