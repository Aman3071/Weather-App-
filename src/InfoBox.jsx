import "./InfoBox.css";
import Card from '@mui/material/Card';  
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox ({ info }) {

    const INIT_URL = "https://plus.unsplash.com/premium_photo-1677593850639-9f1e14e4524b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww";
    const HOT_URL = "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.jpg?s=2048x2048&w=is&k=20&c=MEinOvXAEFy9XXcclTgQV64m_FaoT_NRz8YyWItS9zM=";
    const COLD_URL = "https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB0ZW1wcmF0dXJlfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="InfoBox">
        <h2>Weather Information Of - {info.city}</h2>
        
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia 
        sx={{ height: 140 }} 
        image={info.temp > 30 ? HOT_URL : info.temp > 20 ? RAINY_URL : COLD_URL} 
        title="Weather Image" 
        />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.temp > 30 ? <WbSunnyIcon/> : info.temp > 20 ? <UmbrellaIcon/> : <AcUnitIcon/>} 

                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                    <p>Temperature - <b>{info.temp}&deg;C</b> </p>
                    <p>Humidity - {info.humidity}%</p>
                    <p>Max Temperature - {info.tempMax}&deg;C</p>
                    <p>Min Temperature - {info.tempMin}&deg;C</p>
                </Typography>
            </CardContent>
        </Card>
        </div>
       
    </div>
    );  
};