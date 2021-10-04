import React from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';

const caseStudies = [
  {
    id: 1,
    subtitle: "Apotheosis O'clock",
    title: "Tutoract",
    img: "Tutoract"
  },
  {
    id: 2,
    subtitle: 'Little Game created with Unity',
    title: "JustRun",
    img: "just-run"
  },
  {
    id: 3,
    subtitle: "Stay tune",
    title: "Coming Soon",
    img: "staytune"
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
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img 
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.subtitle} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;