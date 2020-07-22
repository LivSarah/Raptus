import React from 'react'
import './Styles/StarringBar.scss';

function StarringBar() {

  const guests = [
    {href: '/', alt: "mike-perkins", img: require('../../Assets/Images/mike-perkins.jpg'), name: "Mike Perkins", profession: "Illustratør"},
    {href: '/', alt: "mike-collins", img: require('../../Assets/Images/mike-collins.jpg'), name: "Mike Collins", profession: "Illustratør"},
    {href: '/', alt: "barry-kitson", img: require('../../Assets/Images/barry-kitson.jpg'), name: "Barry Kitson", profession: "Illustratør"}
  ];

  return (
    <div className="Starring-Bar">
      {guests.map((value, index) => {
        return <div className="guest-container">
                <a href={value.href} key={index}>
                  <div className="color-tint"/>
                  <img src={value.img} alt={value.alt}/>
                  <p className="guest-name">{value.name}</p>
                  <p className="guest-profession">{value.profession}</p>
                </a>
              </div>
        })}
        <div className="guest-container">
          <a href="/"><img src={require('../../Assets/Images/se-alle-gjester.jpg')} alt={"view-all-guests"}/></a>
        </div>
    </div>
  )
}

export default StarringBar