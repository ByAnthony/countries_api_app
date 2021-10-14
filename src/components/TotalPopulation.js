import React from 'react';

const TotalPopulation = ({countries}) => {

    const totalWorldPopulation = function(){
        const result = countries.map(country => country.population);
        const total = result.reduce((totalPopulation, population) => {
            return totalPopulation + population;
        }, 0);
        return total;
    }

    return(
        <div>
            <p>Population of the World: {totalWorldPopulation()}</p>
        </div>
    )
}

export default TotalPopulation;