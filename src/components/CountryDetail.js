import React from 'react';

const CountryDetail = ({country}) => {

    const countryLanguages = () => {
        return country.languages.map((language) => {
            return language.nativeName;
        })
    }

    return(
        <div>
            <p><img src={country.flags.png} alt="Flag"/></p>
            <h3>{country.name}</h3>
            <p>Languages Spoken: {countryLanguages().join(", ")}</p>
        </div>
    )
}

export default CountryDetail;