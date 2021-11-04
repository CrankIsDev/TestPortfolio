<<<<<<< HEAD
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
    details: "Un mois d'Apothéose, Quatres développeurs : Deux Back-End, Deux Front-End."
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
            {projectImage.map((projectItem) => (
            <div className="case" key={projectItem.id}>  
                <p>{projectItem.details}</p>
              <div className="case-image">
                <img 
                  src={require(`../assets/${projectItem.img}.png`)} 
                  alt={projectItem.title} />
              </div>
            </div>
          ))}
    </div>
    </div>
    </div>
    </>
  )
}

=======
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
    subtitle: "Apotheosis O'clock",
    title: "Tutoract",
    img: "Tutoract",
    details: "One month of apotheosis, with Four Dev : Two Back-End, Two Front-End. Presentation on Youtube i explain the project (french)"
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
            {projectImage.map((projectItem) => (
            <div className="case" key={projectItem.id}>
                <p>{projectItem.subtitle}</p>   
                <p>{projectItem.details}</p>
                <a href="https://www.youtube.com/watch?v=zgBx2B4Xwd4&feature=emb_title" target="_blank" rel="noopener noreferrer">Here for the Video</a>
              <div className="case-image">
                <img 
                  src={require(`../assets/${projectItem.img}.png`)} 
                  alt={projectItem.title} />
              </div>
            </div>
          ))}
    </div>
    </div>
    </div>
    </>
  )
}

>>>>>>> 57d3f5bd97fd3ce86ab39575e46f22413f725924
export default Tutoract;