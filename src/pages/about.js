import React, {useEffect, useState} from 'react';
import gsap from 'gsap';
import Transition from '../components/transition';

const tl = gsap.timeline();

const transitionAnimation = (completeAnimation) => {
  tl.from('h3 span', 1.8, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  }).to('.transition-right', 1.6, {
    height: 0,
    ease: 'expo.inOut',
    stagger: 0.4
  }).to('.transition-topLeft', 1.6, {
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

const About = () => {
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
        <h3>
        <div className="about">
          <span>Hey there ,</span>
        </div>
        </h3>
        <div className="about">
          <p>I'm a Junior Front-End Developer</p>
          <p>Based near Paris (78)</p>
          <p>I started coding at end of Summer (2019)</p>
          <p>Was cooking for 14 years and decided to change my life cause i love to create and have funs with code</p>
          <p>I'm also passionate about Cinema, Video-Games, Basket-Ball.</p>
        </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default About;