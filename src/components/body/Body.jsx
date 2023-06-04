import { useEffect, useState } from "react";
import { getCities } from "../../services/cities";
import { getCountries } from "../../services/getCountries"
import { getCityWeather } from "../../services/weather";
import { WiStrongWind, WiCloudy, WiThermometer, WiHumidity, WiBarometer } from "react-icons/wi"
import { MdOutlineVisibility, MdLocationPin } from "react-icons/md"
import { BsSunFill, BsFillCloudsFill } from "react-icons/bs"

import "./body.css"
import City from "../cities/City";

function Body() {

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null); // de entrada no se cual es el clima
  const [city, setCity] = useState("");
  
  useEffect(() => {
    
    //funcion auto invocada
    (async () => {
      setCountries(await getCountries()) ;
      
    })();
    
  }, [])

  const countryHandler = async e => {

    //cuando elijo un pais, obtengo el codigo del mismo.
    const countryCode = e.currentTarget.value;
    
    //hago el llamado a la API cuando elija un pais y despues elijo una ciudad
    //el countryCode lo pongo para q cuando no tenga seleccionado un pais pero si me haya quedado una ciudad, no me salte error !!
    countryCode && setCities(await getCities(countryCode));
    
    //cuando cambio de pais quiere q la info del weather sea nula
    setWeather(null);
  }

  const cityHandler = async e => {
    const temp = e.currentTarget.value;
    temp && setWeather(await getCityWeather(temp));
    
    //para saber cual es el nombre de la ciudad q eligio
    setCity(temp);
    
  }
  //para poder refrescar la pagina.
  function refreshPage() {
    window.location.reload(false);
  }
  

  //el cca2 me da el codigo de cada pais, y lo uso para la key unica y tb para el value, para hacer el llamado a la API de ciudades de un pais.

    return ( 
        <div className="container-body">
          { !weather &&
           <div className="container-labels">
             <div className="lab-sel">
                <label className="label-select">Pais: </label>
                <select className="select" onChange={ countryHandler } >
                    <option name="">Seleciona uno</option>
                    { countries.sort((a, b) => a.cca2 > b.cca2 ? 1 : -1 )
                    .map(country =>  <option value={ country.cca2 } key={ country.cca2 } > { country.name.common } </option> ) }
                </select>
             </div>
              {/* si no esta seleccionado el pais, no se muestra la eleccion de ciudades */}
              { cities.length > 0 && (
              <div className="lab-sel">
                  <label className="label-select" >Ciudad: </label>
                  <select className="select" onChange={ cityHandler } >
                    <option name="">Seleciona una</option>
                    { cities.sort((a, b) => a.name > b.name ? 1 : -1 )
                    .map(city =>  <option key={ city.id } > { city.name } </option> ) }
                  </select>
              </div>
              )}
           </div>
           }    
              
           {/* si tengo clima me lo muestra! el toFixed es para sacarle los decimales */}
           { weather && (
             <div className="wraper-data">
                <h2 className="h2-city">
                  <span><MdLocationPin/></span> { city }
                </h2>
                <div className="description-weather"> 
                    <h3 className="none"><MdLocationPin/> { city } </h3> 
                    <div className="temp-icon">                    
                      <div className="temp-icon-description">
                          <h2 className="temp-city" >{ weather.main.temp.toFixed() } °C </h2>
                          { 
                              weather.weather.map(p =>  <p className="p-description" key={p.id} >{ p.description }</p>) 
                          }
                      </div>
                      <span>{ weather.weather[0].description === "clear sky" ? <BsSunFill className="icon-sun" /> : <BsFillCloudsFill className="icon-cloud" />  } </span>                        
                    </div>
                    <div className="container-detail">
                        <div className="div-detail" style={{color:"blue"}}><WiThermometer className="weather-icons"/> Temperatura Máxima: { weather.main.temp_max.toFixed() } °C </div>
                        <div className="div-detail" style={{color:"red"}}><WiThermometer className="weather-icons"/> Temperatura Mínima: { weather.main.temp_min.toFixed() } °C </div>
                        <div className="div-detail" style={{color:"#d836e3"}}><WiBarometer className="weather-icons"/> Presión: { weather.main.pressure } hPa </div>
                        <div className="div-detail" style={{color:"green"}}><MdOutlineVisibility className="weather-icons"/> Visibilidad: { weather.visibility / 100 } % </div>
                        <div className="div-detail" style={{color:"black"}}> <WiHumidity className="weather-icons" style={{color:"blue"}}/> Húmedad: { weather.main.humidity } % </div>
                        <div className="div-detail" style={{color:"orange"}}> <WiStrongWind className="weather-icons" style={{color:"blue"}}/> Viento: { (weather.wind.speed * 3.6).toFixed() } Km/h </div>
                        <div className="div-detail" style={{color:"#E91E63"}}> <WiThermometer className="weather-icons"/> Sensación térmica: { weather.main.feels_like.toFixed() } °C </div>
                        <div className="div-detail" style={{color:"grey"}}> <WiCloudy className="weather-icons"/> Nubosidad: { weather.clouds.all } % </div>             
                    </div>
                </div>
            </div>
           )}
           <City/>
           {/* Puse esta boton para refrescar la pagina y poder cambiar de ciudad */}
           {weather && (
               <div className="container-reload">
                   <button className="button-reload" onClick={refreshPage}>Elige otra ciudad !</button>
               </div>
           )}
            
        </div>
     );
}

export default Body;