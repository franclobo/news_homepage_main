import React from 'react';
import RetroPc from '../assets/images/image-retro-pcs.jpg';
import TopLaptops from '../assets/images/image-top-laptops.jpg';
import GamingGrowth from '../assets/images/image-gaming-growth.jpg';

function Popular() {
  return (
    <section className="popular">
      <ul className="popular__list">
        <li className="popular__item">
          <img className="popular__image" src={RetroPc} alt="Retro PCs" />
          <div className="popular__content">
            <h2 className="popular__heading">01</h2>
            <h3 className="popular__title">Reviving Retro PCs</h3>
            <p className="popular__text">What happens when old PCs are given modern upgrades?</p>
          </div>
        </li>
        <li className="popular__item">
          <img className="popular__image" src={TopLaptops} alt="Top Laptops" />
          <div className="popular__content">
            <h2 className="popular__heading">02</h2>
            <h3 className="popular__title">Top 10 Laptops of 2022</h3>
            <p className="popular__text">Our best picks for various needs and budgets.</p>
          </div>
        </li>
        <li className="popular__item">
          <img className="popular__image" src={GamingGrowth} alt="Gaming Growth" />
          <div className="popular__content">
            <h2 className="popular__heading">03</h2>
            <h3 className="popular__title">The Growth of Gaming</h3>
            <p className="popular__text">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Popular
