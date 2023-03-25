import { node } from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuthState } from './firebase/auth';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuthState();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (user) {
    if (children.type.name == 'LandingPage') {
      return <Navigate to="/main" />;
    } else {
      return children;
    }
  } else {
    if (children.type.name == 'LandingPage') {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  }
};

PrivateRoute.propTypes = {
  children: node,
};

export default PrivateRoute;