import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';

const Layout = () => {

    return (
        <div className='container'>
            <header className={css.header}>
                <nav className={css.header__navig}>
                    <NavLink to='/' className={css.header__navLink}>Home</NavLink>
                    <NavLink to='/tweets' className={css.header__navLink}>Tweets</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<div>...Loading</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default Layout;