import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import JoinUs from './components/Join/JoinUs';
import Plans from './components/Plans/Plans';
import Program from './components/Program/Program';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
       <Hero hero key={"hero"}/>
       <Program key={"program"}/>
       <Reasons/>
       <Plans/>
       <Testimonials/>
       <JoinUs/>
       <Footer/>
    </div>
  );
}

export default App;
