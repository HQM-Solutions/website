import { useEffect } from 'react';
import './App.css'
import MainLayout from './components/layout/MainLayout';
import DefaultRoutes from './routes/Routes'

function App() {
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY; // pixels scrolled from top
      const screenHeight = window.innerHeight; // h-screen in px
      const diff = scrollY - screenHeight;

      console.log("ScrollY:", scrollY, "Screen height:", screenHeight, "Difference:", diff);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <MainLayout>
      <DefaultRoutes/>
    </MainLayout>
  );
}

export default App
