const { NavLink } = require("react-router-dom");

const NotFound = () => {
    return (
        <div>
            <p>
            OOps! Page not found! Maybe the page is out of date.
            Want to return to <NavLink to='/'>Home page</NavLink>?
            </p>
        </div>
    );
};

export default NotFound;