import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) return <progress className="progress w-56"></progress>;

    if (user && isAdmin) return children;

    return <Navigate to={'/'} state={{ from: location }} replace />
};

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.node,
}