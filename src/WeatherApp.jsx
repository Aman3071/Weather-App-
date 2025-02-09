import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        humidity: 13,
        temp: 26.77,
        tempMax: 26.77,
        tempMin: 26.77
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
            <h1>Weather App!</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
};