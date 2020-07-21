import React from 'react'
import './Styles/StarringBar.scss';

function StarringBar() {

  const guests = [
    {href: '/', alt: "mike-perkins", img: require('../../Assets/Images/mike-perkins.jpg'), name: "Mike Perkjins", profession: "Artist"},
    {href: '/', alt: "mike-collins", img: require('../../Assets/Images/mike-collins.jpg'), name: "Mike Collins", profession: "Artist"},
    {href: '/', alt: "barry-kitson", img: require('../../Assets/Images/barry-kitson.jpg'), name: "Barry Kitson", profession: "Artist"}
  ];

  return (
    <div className="Starring-Bar">
      {guests.map((value, index) => {
        return <div className="guest-container">
                <a href={value.href} key={index}><img src={value.img} alt={value.alt}/></a>
                <div className="divider"/>
              </div>
        })}
        <div className="guest-container">
          <a href="/"><img src={require('../../Assets/Images/se-alle-gjester.jpg')} alt={"view-all-guests"}/></a>
        </div>
    </div>
  )
}

export default StarringBar