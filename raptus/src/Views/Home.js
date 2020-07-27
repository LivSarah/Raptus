import React from "react";
import Hero from '../Components/Hero';
import StarringBar from '../Components/StarringBar';
import ActivitiesBar from '../Components/ActivitiesBar';
import QuoteAndApplyBar from '../Components/QuoteAndApplyBar';
import { GuestsCollection } from '../Components/GuestsCollection';
import { Person } from '../Components/Person'

export const Home = () => (
    <>
        <Hero />
        <StarringBar />

        <ActivitiesBar />
        <QuoteAndApplyBar />
    </>
);
