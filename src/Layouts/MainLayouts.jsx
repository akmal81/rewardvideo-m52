
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const MainLayouts = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='w-8/12 mx-auto'>
                <Outlet />
            </main>
            <footer>
                <div
                    className='bg-slate-200 text-center py-4'>
                    CopyRight
                </div>
            </footer>
        </>
    );
};

export default MainLayouts;