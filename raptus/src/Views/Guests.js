import React from "react";
import './Guests.scss';
import { GuestsCollection } from '../Components/GuestsCollection';
import { Person } from '../Components/Person'

export const Guests = () => (
    <section className="Guests">
        <header>
            <h4>Årets</h4>
            <h1>GJESTER</h1>
        </header>

        <div className="guests-grid">
            <GuestsCollection>
              {(guests) => (
                  guests.map((guest) => (
                      <Person props={guest}/>
                ))
              )}
            </GuestsCollection>
        </div>
    </section>
);
