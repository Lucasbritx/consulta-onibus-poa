import React, { FC, useState, useEffect } from 'react';
import './index.css'

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
        <div className="wrapper">
            <ul>
                {itineraries.map((item: Itinerary, index: number) => {
                    return (
                        <li className="grow" key={index}>
                            <button>
                                <a className="link" href={`https://www.google.com/maps/?q=${item.lat},${item.lng} `}>Parada - {index}</a>
                            </button>
                        </li>
                    )

                })}
            </ul >
        </div>
    );

};

export default List;