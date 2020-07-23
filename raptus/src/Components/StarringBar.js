import React from 'react'
import './Styles/StarringBar.scss';

function StarringBar() {

  const guests = [
    {href: '/', alt: "mike-perkins", img: require('../Assets/Images/mike-perkins.jpg'), name: "Mike Perkins", profession: "Illustratør", id: 1},
    {href: '/', alt: "mike-collins", img: require('../Assets/Images/mike-collins.jpg'), name: "Mike Collins", profession: "Illustratør", id: 2},
    {href: '/', alt: "barry-kitson", img: 'https://firebasestorage.googleapis.com/v0/b/raptus-62004.appspot.com/o/barry-kitson.jpg?alt=media', name: "Barry Kitson", profession: "Illustratør", id: 3}
  ];

  return (
    <section className="Starring-Bar">
      <div className="starring-cloud">
        <p>Starring:</p>
        <svg viewBox='0 0 105 105'  >
          <path d='M 25,60 
                  a 20,20 1 0,0 0,40 
                  h 50 
                  a 20,20 1 0,0 0,-40 
                  a 10,10 1 0,0 -15,-10 
                  a 15,15 1 0,0 -35,10  
                  z' />
        </svg>
      </div>
      {guests.map((value) => {
        return <div className="guest-container" key={value.id}>
                <a href={value.href}>
                  <div className="color-tint"/>
                  <img src={value.img} alt={value.alt}/>
                  <p className="guest-name">{value.name}</p>
                  <p className="guest-profession">{value.profession}</p>
                </a>
              </div>
        })}
        <div className="guest-container">
          <a href="/"><img src={require('../Assets/Images/se-alle-gjester.jpg')} alt={"view-all-guests"}/></a>
        </div>
    </section>
  )
}

export default StarringBar