import './App.css';
// import Navbar from './Components/Navbar';
// import Hero from './Components/Hero';
// import Section from './Components/Section';
// import About from './Components/About';
// import Skill from './Components/Skill';
// import Projects from './Components/Project';
// import ProjectCounter from './Components/ProjectCounter';
// import Resume from './Components/Resume';
// import Contact from './Components/Contact';

import Header  from './sections/header';

import Hero from './sections/hero';

import Skills from './sections/skills';

import Projects  from './sections/projects';

import Contact from './sections/Contact';

import Footer from './sections/footer';


function App() {


  return (
   
    <div className='wrapper'>

    
        
        <Header />

        <main className="l-main">
            {/* <!--===== HOME =====--> */}
            
            <Hero />

            {/* <!--===== SKILLS =====--> */}
            <Skills />

            {/* <!--===== WORK =====--> */}

            <Projects />
           

            {/* <!--===== CONTACT =====--> */}
            <Contact />
        </main>

        {/* <!--===== FOOTER =====--> */}
        

          <Footer />
       
       

      </div>

      

  );
}







export default App;
