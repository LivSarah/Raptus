import React from "react";
import "./Stands.scss";
import { StandsCollection } from "../Components/StandsCollection";
import { Person } from "../Components/Person";
import { PageHeader } from "../Components/PageHeader";

export const Stands = () => (
  <main className="Stands">
    <PageHeader preTitle="Årets" title="STANDS" />

    <section className="stands-grid">
      <StandsCollection>
        {(stands) =>
          stands.map((stand) => (
            <Person
              name={stand.name}
              image={stand.image}
              to={`/stands/${stand.name}`}
              clickable={false}
              key={stand.name}
            />
          ))
        }
      </StandsCollection>
    </section>

    <section className="application-wrapper">
      <h3>Søk om å ha stand på årets festival her!</h3>
      <p>
        Det er begrenset med standsplasser, så her er det lurt å være tidlig ute
        med å søke Ett bord fra fredag til søndag koster 350kr, inkludert en
        stol. Ytterligere bord koster 300kr/stk, og ekstra stoler er 50kr/stk.
      </p>
    </section>
  </main>
);
