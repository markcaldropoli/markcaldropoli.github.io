import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import About from "./components/About/About";
import Experience from './components/Experience/Experience';
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
    </>
  );
};

export default App;