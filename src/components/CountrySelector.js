import React from 'react';

const CountrySelector = ({countries, onCountrySelected}) => {

    const handleChange = function(event){
        onCountrySelected(countries[event.target.value]);
    }

    const countryOption = countries.map((country, index) => {
        return <option value={index} key={index}>{country.name}</option>;
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countryOption}
        </select>
    )
}

export default CountrySelector;