import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ReactComponent as LogoSvg } from '../../images/Logo.svg';
import css from './Layout.module.css';
import { BeatLoader } from 'react-spinners';


const Layout = () => {

    return (
        <>
        <div className='container'>
            <header className={css.header}>
                <nav className={css.header__navig}>
                    <NavLink to='/' className={css.header__navLink}>Home</NavLink>
                    <NavLink to='/tweets' className={css.header__navLink}>Tweets</NavLink>
                </nav>
                <LogoSvg />
            </header>
        </div>
        <div className='container'>
            <main>
                <Suspense fallback={<div><BeatLoader color="#5CD3A8" /></div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
        </>
    );
};

export default Layout;