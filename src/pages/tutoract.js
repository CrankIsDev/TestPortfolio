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

const projectImage = [
  {
    id: 1,
    title: "Tutoract",
    img: "Tutoract",
    details: "Un mois d'Apothéose, Quatres développeurs."
  },
  {
    id: 2,
    title: "Tutoract",
    img: "Inscription",
    details: "Inscription"
  },
  {
    id: 3,
    title: "Tutoract",
    img: "Profil2",
    details: "Page de Profil"
  },
];

const Tutoract = () => {

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
                <span>Tutoract :</span>
              </div>
            </h3>
            <div className="case-tutoract">  
            {projectImage.map((projectItem) => (
              <div key={projectItem.id}>
                  <p>{projectItem.details}</p>
              <div className="case-image">
                <img 
                  src={require(`../assets/${projectItem.img}.png`)} 
                  alt={projectItem.title} 
                />
              </div>
              </div>
          ))}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Tutoract;