import React, { FC, useMemo } from 'react';
import { Itinerary } from '../../pages/Home';
import './index.css'

type ListProps = {
    itineraries: Itinerary[];
}

const List: FC<ListProps> = ({ itineraries }) => {

    const ListItineraries = useMemo(() => itineraries.map((item, index) => {
        return (
            <li className="grow" key={index}>
               <a className="link"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://www.google.com/maps/?q=${item.lat},${item.lng} `}>
                        Parada - {index}
                    </a>
            </li>
        )

    }), [itineraries]);

    return (
        <div className="wrapper">
            <ul>
                { ListItineraries }
            </ul >
        </div>
    );

};

export default List;