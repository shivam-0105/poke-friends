import React from 'react';
import Card from './Card';

function CardList ( {data} ) {
    return(
        <div>
            { 
                data.map( (user,i) => {
                    return (
                        <Card
                            key={i}
                            id={data[i].id}
                            name={data[i].name}
                            type={data[i].types[0].type.name}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;