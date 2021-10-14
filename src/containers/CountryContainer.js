import React, { useState, useEffect } from 'react';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';
import TotalPopulation from '../components/TotalPopulation';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountrySelected = function(country){
        setSelectedCountry(country);
    }

    return (
        <div className="main-container">
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected}/>
            {selectedCountry ? <CountryDetail country={selectedCountry}/> : null}
            <TotalPopulation countries={countries}/>
        </div>
    )
}

export default CountryContainer;
