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

const personnalWeather = [
  {
    id: 1,
    title: "Weather",
    img: "Temperature",
    details: "Température par localisation."
  },
  {
    id: 2,
    title: "Weather",
    img: "SWeather",
    details: "Recherche par ville."
  },
];

const Weather = () => {

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
              <span>Personnal Weather :</span>
            </div>
        </h1>
        <div className="case-weather">
        {personnalWeather.map((personnalItem) => (
          <div key={personnalItem.id}>
            <p>{personnalItem.details}</p>
            <div className="case-image" key={personnalItem.id}>
              <img 
                src={require(`../assets/${personnalItem.img}.png`)}
                alt={personnalItem.title}
              />
            </div>
          </div>
                ))}   
        </div>
      </div>
      </div>
    </div>
  </>
  );
}

export default Weather;