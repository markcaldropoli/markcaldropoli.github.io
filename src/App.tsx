import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import About from "./components/About/About";
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Landing from './components/Landing/Landing';

const App: React.FC = () => {
  return (
    <>
      <main>
        <Landing />
        <Header />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
};

export default App;