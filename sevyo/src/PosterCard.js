import * as React from 'react';
import supabase from './supabaseClient'
import { useEffect, useState } from 'react';
import CardLayout from './CardLayout'

export default function PosterCard() {

    const [cards, setCards] = useState([])

    async function fetchData() {
        let { data: cards, error } = await supabase
        .from('Cards')
        .select('*')
        setCards(cards); 
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        cards.map(card => (
            <div className='bg-black h-screen w-screen'>
                <CardLayout url={card.media} name={card.name} number={card.number}/>
            </div>
        ))
    );
}