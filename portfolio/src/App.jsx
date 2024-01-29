import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('Home');

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  let ComponentToRender;

  switch (currentView) {
    case 'AboutMe':
      ComponentToRender = AboutMe;
      break;
    case 'Contact':
      ComponentToRender = Contact;
      break;
    case 'Portfolio':
      ComponentToRender = Portfolio;
      break;
    default:
      ComponentToRender = Hero; // Default to Hero component
  }

  return (
    <div className='min-h-screen bg-gradient-to-tr from-[#301934] via-[#120B2E] to-[black] px-8 md:px-14 lg:px-36 pb-10 pt-7'>
      <Header navigateTo={navigateTo} />
      <ComponentToRender currentView={currentView} navigateTo={navigateTo} />
      <Footer />
    </div>
  );
}

export default App;
