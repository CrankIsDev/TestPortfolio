import React, {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";

//Pages
import Home from "./pages/home";
import Tutoract from './pages/tutoract';
import About from './pages/about';
import Game from './pages/unity';
import Coming from './pages/coming';

const routes = [
   {path: '/', name: 'Home', Component: Home},
   {path: '/tutoract', name: 'Tutoract', Component: Tutoract},
   {path: '/about-me', name: 'About', Component: About},
   {path: '/justRunGame', name: 'JustRunGame', Component: Game},
   {path: '/coming-soon', name: 'Coming Soon', Component: Coming},
]

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}


const App = () => {
  gsap.to('body', 0, { css: { visibility: "visible" }});

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    let vh = dimensions.height * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    }

  })
  
  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({path, Component}) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
