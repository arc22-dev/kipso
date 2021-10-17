import './App.css';
import About from './components/layouts/About';
import Banner from './components/layouts/Banner';
import Benefits from './components/layouts/Benefits';
import Categories from './components/layouts/Categories';
import Courses from './components/layouts/Courses';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Newsletter from './components/layouts/Newsletter';
import Partners from './components/layouts/Partners';
import Register from './components/layouts/Register';
import Teachers from './components/layouts/Teachers';
import Video from './components/layouts/Video';
import Blog from './components/layouts/Blog';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import TeachersPage from './components/pages/TeachersPage';
import GalleryPage from './components/pages/GalleryPage';
import PricingPage from './components/pages/PricingPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
    <div id="__next">
      <div>
        <div className="page-wrapper">
        <Switch>
          <Route path="/about">
          <AboutPage></AboutPage>
          </Route>

          <Route path="/teachers">
          <TeachersPage></TeachersPage>
          </Route>

          <Route path="/gallery">
          <GalleryPage></GalleryPage>
          </Route>

          <Route path="/pricing">
          <PricingPage></PricingPage>
          </Route>

          <Route path="/contact">
          <ContactPage></ContactPage>
          </Route>

          <Route path="/">
          <Header></Header>
          <Banner></Banner>
          <About></About>
          <Courses></Courses>
          <Video></Video>
          <Register></Register>
          <Categories></Categories>
          <Benefits></Benefits>
          <Partners></Partners>
          <Blog></Blog>
          <Teachers></Teachers>
          <Newsletter></Newsletter>
          <Footer></Footer>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
