import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoolLayout from './layouts/cool-layout';
import Home from './pages/Home'; 
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Services from './pages/Services';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <CoolLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CoolLayout>
    </Router>
  );
}

export default App;
