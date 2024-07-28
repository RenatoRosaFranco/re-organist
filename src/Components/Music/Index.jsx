import React, { useRef } from 'react';
import './style.scss';

const MusicLabel = ({ label }) => {
    const { labelName, coverImage, musics } = label;

    return(
      <div className='row'>
          <div className="col-md-6">
              <h1 className='bold'>{labelName}</h1>
              <img
                  src={coverImage}
                className='rounded-image cover'
               alt={labelName}
              />
          </div>

          <div className="col-md-6">
              <div className="panel panel-default">
                  <div className="panel-body">
                      <ul className="list-unstyled">
                          {musics.map((music) => (
                            <li key={music.id}>
                                <AudioPlayer music={music} />
                            </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    );
}

const AudioPlayer = ({ music }) => {
    const audioRef = useRef(null);

    const handlePlay = () => {
        audioRef.current.play();
    }

    return(
        <div className='audio-player'>
            <button className='btn btn-primary' onClick={handlePlay}>Play</button>
            <span>{music.name} ({music.duration})</span>
            <audio ref={audioRef} src={music.path}></audio>
        </div>
    );
}

const Music = () => {
    let musicData = [
        {
            id: 1,
            labelName: 'The Contemporary',
            coverImage: 'https://placeholder.co/150x150',
            musics: [
                {
                    id: 1,
                    name: 'Symphony No.40 in G Minor',
                    path: '',
                    duration: '02:48'
                },
                {
                    id: 2,
                    name: "Don't Let Me Go",
                    path: '',
                    duration: "02:35"
                },
                {
                    id: 3,
                    name: 'Time',
                    path: '',
                    duration: '04:27'
                },
                {
                    id: 4,
                    name: 'Tell Me Baby',
                    path: '',
                    duration: '02:45'
                },
                {
                    id: 5,
                    name: 'No Words',
                    path: '',
                    duration: '03:39'
                }
            ]
        },
        {
            id: 2,
            labelName: 'The Classical',
            coverImage: 'https://placeholder.co/150x150',
            musics: [
                {
                    id: 1,
                    name: 'Amor Fati',
                    path: '',
                    duration: '02:42'
                }
            ]
        }
    ]

    return(
        <section id="music">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="bold text-center">Músicas</h1>
                        <p className='text-center'>Conheça os ultimos lançamentos.</p>
                        <br />

                        <div className="row">
                            <div className="col-md 10 col-md-offset-2">
                                {musicData.map((label) => (
                                    <MusicLabel
                                        key={label.id}
                                        label={label}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Music;