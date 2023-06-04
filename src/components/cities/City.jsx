import { useState, useEffect } from "react";
import { getCityWeather } from "../../services/weather";
import { BsFillCloudsFill, BsFillCloudDrizzleFill, BsFillSunFill } from "react-icons/bs"
import "./city.css";

export default function City() {

  const [barcelona, setBarcelona] = useState(null);
  const [londres, setLondres] = useState(null);
  const [baires, setBaires] = useState(null);
  const [munich, setMunich] = useState(null);
  const [ny, setNy] = useState(null);
  const [paris, setParis] = useState(null);
  const [roma, setRoma] = useState(null);
  const [sidney, setSidney] = useState(null)

console.log(baires)
  useEffect(() => { 
    (async () => {
      setBarcelona(await getCityWeather("Barcelona"));
      setLondres(await getCityWeather("Londres"));
      setBaires(await getCityWeather("Buenos Aires"));
      setMunich(await getCityWeather("Munich"));
      setNy(await getCityWeather("New York"));
      setParis(await getCityWeather("Paris"));
      setRoma(await getCityWeather("Roma"));
      setSidney(await getCityWeather("Sidney"));
    })();
  },[])

  return (
    <div className="container-all-cities">
        { barcelona && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ barcelona.name }</h3>
            { barcelona.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ barcelona.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { barcelona.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { paris && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ paris.name }</h3>
            { paris.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ paris.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { paris.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { baires && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ baires.name }</h3>
            { baires.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ baires.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { baires.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { ny && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ ny.name }</h3>
            { ny.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ ny.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { ny.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { munich && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ munich.name }</h3>
            { munich.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ munich.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { munich.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { londres && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ londres.name }</h3>
            { londres.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ londres.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { londres.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { roma && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ roma.name }</h3>
            { roma.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ roma.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { roma.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        { sidney && (  
          <div className="container-city-temp">
            <h3 className="h3-name-city">{ sidney.name }</h3>
            { sidney.clouds.all < 40 ? <BsFillSunFill className="sun-city"/> : <BsFillCloudsFill className="cloud-city"/>  }
            <h3 className="h3-temp-city">{ sidney.main.temp.toFixed() } °C</h3> 
            <h3 className="h3-temp-min-city">min { sidney.main.temp_min.toFixed() } °C</h3>
          </div>
        )}
        
      
      
    </div>
  )
}
