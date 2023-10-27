import { Navbar, Footer } from '../components';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    )
}

export default RootLayout;
