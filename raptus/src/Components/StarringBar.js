import React from 'react'
import './Styles/StarringBar.scss';

function StarringBar() {
  return (
    <div className="Starring-Bar">
        <a href="/"><img src={require('../Assets/Images/mike-perkins.jpg')} alt="mike-perkins"/></a>
        <a href="/"><img src={require('../Assets/Images/mike-collins.jpg')} alt="mike-collins"/></a>
        <a href="/"><img src={require('../Assets/Images/barry-kitson.jpg')} alt="barry-kitson"/></a>
        <a href="/"><img src={require('../Assets/Images/se-alle-gjester.jpg')} alt="view-all-guests"/></a>
    </div>
  )
}

export default StarringBar