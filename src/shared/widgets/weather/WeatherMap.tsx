import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spinner } from '../../utils/Spinner';
import { Meteo } from './model/meteo';

interface WeatherProps {
  city: string;
}

export const iconURL = `http://openweathermap.org/img/w`
export const iconExt = 'png'

export default function Weather (props: WeatherProps) {
  const [meteo, setMeteo] = useState<Meteo | null>(null);

  useEffect(() => {
    axios.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&APPID=eb03b1f5e5afb5f4a4edb40c1ef2f534`)
      .then(res => {
        setMeteo(res.data);
      })
  }, [props.city])

  return <div>
    {
      meteo ?
        <span className="bg-slate-200 rounded-lg inline-block p-3">
          <div>{props.city}</div>
          <div className="text-lg">{ meteo?.main.temp}°</div>
          <img alt="weather icon" src={`${iconURL}/${meteo.weather[0].icon}.${iconExt}`} />
        </span> :
      <Spinner/>
    }

  </div>
};

