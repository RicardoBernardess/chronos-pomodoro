import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { Home } from '../../pages/Home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { NotFound } from '../../pages/NotFound';
import { useEffect } from 'react';

//Carrega a página com o scroll no topo
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  //O componente não retorna nada, mas cria um hook
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
