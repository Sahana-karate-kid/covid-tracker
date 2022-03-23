import React from 'react';
import Cards from "./Cards";

function CovidSummary(props) {
    const { totalConfirmed,
        totalRecovered,
        totalDeaths,
        country } = props;
    return (
        <div className='main__content'>
            <div className='cards__align'>
                <h1>{country==''? 'WorldWide Count': country}</h1>
                <div>
                    <Cards>
                        <div>Total confirmed</div><br />
                        <div>{props.totalConfirmed}</div>
                    </Cards>
                    <Cards>
                        <div>Total recovered</div><br />
                        <div>{props.totalRecovered}</div>
                    </Cards>
                    <Cards>
                        <div>Total Deaths</div><br />
                        <div>{props.totalDeaths}</div>
                    </Cards>
                </div>
            </div>
        </div>
    )
}

export default CovidSummary