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
          <span>Qui suis-je :</span>
        </div>
        </h3>
        <div className="about">
          <p>Je suis Developpeur Junior.</p>
          <p>J'habite dans les Yvelines(78).</p>
          <p>J'ai commencer a codé en 2019.</p>
          <p>Je suis passionné aussi par le Cinema, les voyages, et pleins d'autres choses.</p>
          <p>Et avant je faisait de la cuisine gastronomique.</p>
        </div> 
        </div>
      </div>
    </div>
    </>
  )
}

export default About;