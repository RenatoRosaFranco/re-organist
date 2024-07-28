import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const Sheet = ({ sheet }) => {
    let { name, price } = sheet;

    return(
        <div className='col-md-3'>
            <div className="jumbotron"
                 style={{ height: 210, position: 'relative' }}>
                <a href="#" className="download-icon">
                    <FontAwesomeIcon icon={faDownload} size="2x"/>
                </a>
            </div>

            <h4 className="bold name">{name}</h4>
            <p className="price">R$ {price}</p>
        </div>
    )
}

const SheetMusic = () => {
    let sheetMusics = [
        {
            id: 1,
            name: 'Prelude No.2 in E Flat Major - Sheet Music',
            price: '4,99'
        },
        {
            id: 2,
            name: 'Tranquilitas - Sheet Music',
            price: '3,49'
        },
        {
            id: 3,
            name: 'Prelude in E Minor - Sheet Music',
            price: '3,49'
        },
        {
            id: 4,
            name: 'Adagio in D Minor - Sheet Music',
            price: '3,49'
        },
        {
            id: 5,
            name: 'Time (Organ Cover) - Sheet Music',
            price: '3,49'
        },
        {
            id: 6,
            name: 'Prelude FFXII - Sheet Music',
            price: '3,49'
        },
        {
            id: 7,
            name: 'IT Theme - Sheet Music',
            price: '3,49'
        },
        {
            id: 8,
            name: 'Potter Waltz - Sheet Music',
            price: '3,49'
        }
    ]

    return(
        <section id="sheet-music">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Partituras</h1>
                        <p className='text-center'>Acesse as partituras disponíveis.</p>
                        <br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {sheetMusics.map((sheet) => (
                            <Sheet sheet={sheet} key={sheet.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SheetMusic;