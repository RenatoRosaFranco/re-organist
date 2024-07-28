import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTiktok,
    faInstagram,
    faFacebook,
    faTwitter,
    faYoutube,
    faSoundcloud,
    faSpotify
} from '@fortawesome/free-brands-svg-icons'
import './style.scss';

const SocialStack = () => {
    return(
        <div className='social-stack'>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2xl" className='social-icon' title='TikTok | Renato Franco'/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className='social-icon' title='Instagram | Renato Franco'/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className='social-icon' title='Facebook | Renato Franco'/>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="2x" className='social-icon' title='Twitter | Renato Franco'/>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" className='social-icon' title='Youtube | Renato Franco'/>
            </a>
            <a href="https://www.soundcloud.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} size="2x" className='social-icon' title='SoundCloud | Renato Franco'/>
            </a>
            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSpotify} size="2x" className='social-icon' title='Spotify | Renato Franco'/>
            </a>
        </div>
    )
}

export default SocialStack;