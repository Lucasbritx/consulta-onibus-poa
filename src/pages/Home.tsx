import React, { FC, useState, useEffect } from 'react';
import './index.css';
import InputSelect from '../components/InputSelect';
import Tab from '../components/Tab';
import List from '../components/List';
import axios from '../middlewares/axios';

type Bus = {
    id: string,
    codigo: string,
    nome: string,
}

type TypeBus = 'microbus' | 'bus'

type TypeOptions = { value: string, label: string } | null

const Home: FC = () => {
    const [bus, setBus] = useState<Bus[]>([]);
    const [microBus, setMicroBus] = useState<Bus[]>([]);
    const [busView, setBusView] = useState<TypeOptions>({ label: "", value: "" });
    const [busItinerary, setBusItinerary] = useState<object[]>([]);

    const fetchItinerary = async (id: number): Promise<Bus[]> => {
        try {
            const { data } = await axios.get(`?a=il&p=${id}`);
            return data;
        } catch (error) {
            return error;
        }

    };

    useEffect(() => {
        const getItinerary = async () => {
            if (!!busView!.value) {
                const response = await fetchItinerary(parseInt(busView!.value));
                setBusItinerary(response);
            }
        }

        getItinerary();
    }, [busView])

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
    }, []);

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
            <h1>Consulta de itinerários</h1>
            <Tab
                onSelect={() => { setBusItinerary([]) }}
                TitleTab1={'Ônibus'}
                TitleTab2={'Lotação'}
                Tab1={
                    <>
                        <InputSelect
                            placeholder="Selecione uma linha de ônibus"
                            className={'select'}
                            options={getBusOptions()}
                            onChange={(item: TypeOptions) => { setBusView(item) }}
                        />
                        <List itinerary={busItinerary} />
                    </>

                }
                Tab2={
                    <>
                        <InputSelect
                            placeholder="Selecione uma linha de lotação"
                            className={'select'}
                            options={getMicroBusOptions()}
                            onChange={(item: TypeOptions) => { setBusView(item) }}
                        />
                        <List itinerary={busItinerary} />
                    </>
                }
            />
        </>
    )
};

export default Home;