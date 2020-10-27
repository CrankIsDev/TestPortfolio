import React, {useEffect, useState} from 'react';
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

const Coming = () => {

  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

 useEffect(() => {
   transitionAnimation(completeAnimation);
 }, [])

  return (
    <>
    {animationComplete === false ? <Transition /> : ""}
    <div className="page">
      <div className="container">
        <div className="row">
          <h1>
            <div className="about">
              <span>Coming Soon...</span>
            </div>
          </h1>
          <div>
            <p className="tune">Stay Tune</p>
          </div>
            <div className="lamp__wrap">
              <div className="lamp">
                <div className="cable"></div>
                <div className="cover"></div>
                <div className="in-cover">
                <div className="bulb"></div>
              </div>
             <div className="light"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Coming;