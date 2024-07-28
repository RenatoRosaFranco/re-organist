import React from 'react';
import './style.scss';

const Event = ({ event }) => {
    let { name, location, date, time } = event;

    return (
        <div className="col-md-12">
            <div className='panel panel-default'>
                <div className="panel-body">
                    <button className='btn btn-primary btn-lg pull-right'
                    style={{
                        marginTop: 60,
                        marginRight: 20,
                        backgroundColor: 'transparent',
                        borderRadius: 25,
                        padding: 13,
                    }}>
                        Comprar Ingressos
                    </button>

                    <h1 className='bold pull-left' style={{
                        backgroundColor: '#EEE',
                        padding: 30,
                        marginRight: 20
                    }}>{date}</h1>
                    <h2 className="bold">{name}</h2>
                    <p>{time} / {location}</p>
                    <p>Organista: <span className='bold'>Renato Franco</span></p>
                </div>
            </div>
        </div>
    )
}

const Events = () => {
    let eventsData = [
        {
            id: 1,
            name: "I - Bach Concert",
            location: "Paróquia de São Borja",
            date: "24/02",
            time: "15:00"
        },
        {
            id: 1,
            name: "II - Bethoven Concert",
            location: "Paróquia de São Borja",
            date: "24/02",
            time: "15:00"
        },
        {
            id: 1,
            name: "III - Chopin Concert",
            location: "Paróquia de São Borja",
            date: "24/02",
            time: "15:00"
        }
    ]

    return(
        <section id="events">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Eventos</h1>
                        <p className='text-center'>Acompanhe a agenda de eventos.</p>
                        <br />

                        <div className='row'>
                            {eventsData.map((event) => (
                                <Event event={event} key={event.id} />
                            ))}
                        </div>

                        <div className="row"><br />
                            <div className="text-center">
                                <button className='btn btn-primary btn-lg' style={{ width: 150 }}>
                                    Ver Mais
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Events;