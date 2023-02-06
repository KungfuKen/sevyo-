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
                <div className='bg-black'>
                    <div className='mt-0'>
                        <CardLayout url={card.media} name={card.name} number={card.number} 
                        description={card.description}/>
                    </div>
                </div>
            ))
    );
}