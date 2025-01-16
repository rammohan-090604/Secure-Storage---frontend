import Hero from '../components/Hero';
import About from '../components/About';
import Process from '../components/Process';

function HomePage() {
  return (
    <div>
      <section id="hero">
      <Hero />
      </section>
      <section id="about">
      <About />
      </section>
      <section id="process">
      <Process />
      </section>
      
    </div>
  );
}

export default HomePage;