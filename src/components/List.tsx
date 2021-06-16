import React, { FC, useState, useEffect } from 'react';

type ListProps = {
    itinerary: object;
}

type Itinerary = {
    lat: string,
    lng: string
}

const List: FC<ListProps> = ({ itinerary }) => {
    const [itineraries, setItineraries] = useState<Itinerary[]>([])

    const constructItineraries = () => {
        const itineraries: Itinerary[] = []
        Object.values(itinerary).map((item) => {
            if (typeof (item) === 'object') {
                itineraries.push(item)
            }
        });
        return setItineraries(itineraries)
    }

    useEffect(constructItineraries, [itinerary])

    return (
        <ul>
            {itineraries.map((item: Itinerary, index: number) => {
                return (
                    <li key={index}>
                        <a href={`https://www.google.com/maps/?q=${item.lat},${item.lng} `}>Parada - {index}</a>
                    </li>
                )

            })}
        </ul >
    );

};

export default List;