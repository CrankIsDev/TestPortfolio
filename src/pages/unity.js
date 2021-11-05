import React, {useEffect, useState} from 'react';
import Unity, { UnityContext } from "react-unity-webgl";
import gsap from 'gsap';
import Transition from '../components/transition';

const tl = gsap.timeline();

const transitionAnimation = (completeAnimation) => {
  tl.from('h1 span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }).to('.transition-topLeft', 1, {
    width: 0,
    ease: 'expo.inOut',
    delay: -.8,
    stagger: {
      amount: 0.4
    }
  }).to('.transition', 0, {
    css:{ 
      display: "none" 
    },
    onComplete: completeAnimation
  })
}

const Game = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

 useEffect(() => {
   transitionAnimation(completeAnimation);
 }, [])


const unityContext = new UnityContext({
   loaderUrl: "./Build/JustRun3.loader.js",
   dataUrl: "./Build/JustRun3.data",
   frameworkUrl: "./Build/JustRun3.framework.js",
   codeUrl: "./Build/JustRun3.wasm",
 })


  return (
    <>
    {animationComplete === false ? <Transition /> : ""}
    <div className="page">
      <div className="container">
        <div className="row">
        <h1>
            <div className="about">
              <span>Just Run</span>
            </div>
        </h1>
        <div className="webgl-content">
          <Unity
            unityContext={unityContext}
            />
        </div>
      </div>
      </div>
    </div>
  </>
  );
}

export default Game;