import React from 'react';

const Card = ({country}) => {
    // console.log(props.country);
    // console.log(country);
    return (
        <li className='card'>
        <img src={country.flags.svg} alt={"drapeau de " + country.translations.fr} />
            <div className='infos' >
                <h2>{country.translations.fr}</h2>
                <h4>{country.capital}</h4>
                <p>
                    Po.{country.population.toLocaleString()}
                </p>
            </div>
        </li>
    );
};

export default Card;