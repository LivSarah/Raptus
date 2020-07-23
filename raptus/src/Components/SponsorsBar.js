import React from 'react';
import './Styles/SponsorsBar.scss';

function SponsorsBar() {
    return (
      <section className="SponsorsBar">
          <div className="content-wrapper">
            <p className="our-sponsors">Våre<br/>sponsorer: </p>
            <div className="divider" />
            <img src={require('../Assets/Images/kulturraadet.png')} alt="kulturrådet-logo"/>
            <div className="divider" />
            <img src={require('../Assets/Images/biblioteket.png')} alt="biblioteket-logo"/>
            <div className="divider" />
            <img src={require('../Assets/Images/bergen-kommune.png')} alt="bergen-kommune-logo"/>
          </div>
      </section>
    )
  }
  
  export default SponsorsBar;