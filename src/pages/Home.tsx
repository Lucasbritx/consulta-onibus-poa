import React, { FC, useState, useEffect } from 'react';
import InputSelect from '../components/InputSelect';
import Tab from '../components/Tab';
import axios from '../middlewares/axios';


type Bus = {
    id: string,
    codigo: string,
    nome: string,
}

type TypeBus = 'microbus' | 'bus'

const Home: FC = () => {
    const [bus, setBus] = useState<Bus[]>([]);
    const [microBus, setMicroBus] = useState<Bus[]>([]);
    const [typeBus, setTypeBus] = useState<TypeBus>("bus");

    const getUrlBytypeBus = (typeBus: TypeBus): string => {
        switch (typeBus) {
            case 'microbus': {
                return '?a=nc&p=%&t=l'
            }
            case 'bus': {
                return '?a=nc&p=%&t=o'
            }
            default: {
                return '?a=nc&p=%&t=o';
            }
        }
    }

    const fetchBuses = async (typeBus: TypeBus): Promise<Bus[]> => {
        try {
            const { data } = await axios.get<Bus[]>(getUrlBytypeBus(typeBus));
            return data;
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        const getBuses = async () => {
            const newBuses = await fetchBuses('bus');
            const newMicroBus = await fetchBuses('microbus');
            setBus(newBuses);
            setMicroBus(newMicroBus);
        }

        getBuses()
    }, [typeBus]);

    const getBusOptions = () => {
        return bus.map((b: Bus) => {
            return { label: `${b.codigo} - ${b.nome}`, value: b.id }
        })
    };

    const getMicroBusOptions = () => {
        return microBus.map((b: Bus) => {
            return { label: `${b.codigo} - ${b.nome}`, value: b.id }
        })
    };

    return (
        <>
            <Tab
            TitleTab1={'Ônibus'}
            TitleTab2={'Lotação'} 
            Tab1={
                <InputSelect
                options={getBusOptions()}
                // onChange={({ value }) => { console.log(value) }}
                />
                
            }
            Tab2={
                <InputSelect
                options={getMicroBusOptions()}
                // onChange={({ value }) => { console.log(value) }}
                />
            }
            />
        </>
    )
};

export default Home;