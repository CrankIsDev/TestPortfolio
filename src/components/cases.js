import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
  {
    id: 1,
    subtitle: "Apotheosis O'clock",
    title: "Tutoract",
    img: "Tutoract",
    url: "/tutoract"
  },
  {
    id: 2,
    subtitle: 'Température',
    title: "Weather",
    img: "SWeather",
    url: "/personnal-weather"
  },
  {
    id: 3,
    subtitle: "Stay tune",
    title: "Coming Soon",
    img: "staytune",
    url: "/coming-soon"
  },
];



const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
          <div className="cases-arrow next">
            <CasesNext />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
            <a href={caseItem.url}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
            </a> 
              <div className="case-image">
                <img 
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.subtitle}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;