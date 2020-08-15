import React from "react";
import './Guests.scss';
import { GuestsCollection } from '../Components/GuestsCollection';
import { Person } from '../Components/Person';
import { PageHeader } from '../Components/PageHeader';

export const Guests = () => (
    <main className="Guests">
        <PageHeader preTitle="Årets" title='GJESTER'/>

        <section className="guests-grid">
            <GuestsCollection>
              {(guests) => (
                  guests.map((guest) => (
                      <Person 
                        name={guest.name} 
                        profession={guest.profession} 
                        image={guest.image} 
                        to={`/gjester/${guest.name}`}
                        clickable={guest.clickable} 
                        key={guest.name}
                      />
                ))
              )}
            </GuestsCollection>
        </section>
    </main>
);
