import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import MenuItemDetails from './pages/MenuItemDetails.tsx';
import Ordering from './pages/Ordering.tsx';
import Checkout from './pages/Checkout.tsx';
import Reservation from './pages/Reservation.tsx';
import Gallery from './pages/Gallery.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Profile from './pages/Profile.tsx';
import NotFound from './pages/NotFound.tsx';

const App = () => {
  return (
    <Theme appearance="light" accentColor="gold" radius="large">
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <main className="min-h-screen font-sans selection:bg-destructive/20 selection:text-destructive">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MenuItemDetails />} />
              <Route path="/order" element={<Ordering />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </main>
        </Router>
      </AuthProvider>
    </Theme>
  );
}

export default App;
