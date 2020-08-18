import React from 'react';
import './Styles/SponsorsBar.scss';

function SponsorsBar() {
    return (
      <section className="SponsorsBar">
          <div className="content-wrapper">
            <p className="our-sponsors">Våre<br/>sponsorer: </p>
            <img src={require('../Assets/Images/kulturraadet.png')} alt="kulturrådet-logo"/>
            <img src={require('../Assets/Images/biblioteket.png')} alt="biblioteket-logo"/>
            <img src={require('../Assets/Images/bergen-kommune.png')} alt="bergen-kommune-logo"/>
          </div>
      </section>
    )
  }
  
  export default SponsorsBar;