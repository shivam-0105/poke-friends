import React from 'react';
import './Card.css';
import tachyons from 'tachyons'

function Card ( { name, id, type } ) {
    // const { name, id, data, type } = props
    const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    const firstCapitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return(
        <div className='tc Color dib pa3 ma2 grow shadow-1 bw2 br3' >
            <img src={image} alt={name} width='200px' height='200px' />
            <div>
                <h2>{firstCapitalize(name)}</h2>
                <h3>Type : {firstCapitalize(type)}</h3>
            </div>
        </div>
    );
}

export default Card;