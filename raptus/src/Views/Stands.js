import React from 'react';
import './Stands.scss';
import { StandsCollection } from '../Components/StandsCollection';
import { Person } from '../Components/Person';
import { PageHeader } from '../Components/PageHeader';

export const Stands = () => (
    <section className="Stands">
        <PageHeader preTitle="Årets" title='STANDS' />

        <div className="stands-grid">
            <StandsCollection>
              {(stands) => (
                  stands.map((stand) => (
                      <Person 
                        name={stand.name} 
                        image={stand.image} 
                        to={`/stands/${stand.name}`}
                        clickable={true} 
                        key={stand.name}
                      />
                ))
              )}
            </StandsCollection>
        </div>
    </section>
);
