import React from 'react'

const Weather = (props) => {

        return(
                <div className="weatherContainer">
                   <ul>
               
                     {
                    props.cont &&
                    <li className="propName">
                    Country: 
                        <span className="propValue">{props.cont}</span>
                    </li>
                    }
                          {
                    props.city &&
                    <li className="propName">
                        City: 
                        <span className="propValue">{props.city}</span>
                    </li>
                    }
                     {
                    props.tmp &&
                    <li className="propName">
                    Tempreature: 
                        <span className="propValue">{props.tmp}</span>
                    </li>
                    }
                     {
                    props.hum &&
                    <li className="propName">
                    Humidity: 
                        <span className="propValue">{props.hum}</span>
                    </li>
                    }
                     {
                    props.wind &&
                    <li className="propName">
                    Wind: 
                        <span className="propValue">{props.wind}</span>
                    </li>
                    }
                      {
                    props.desc &&
                    <li className="propName">
                    Description: 
                        <span className="propValue">{props.desc}</span>
                    </li>
                    }
                  {
                    props.err &&
                    <p className="error">
                        <span className="propValue">{props.err}</span>
                    </p>
                    }
</ul>
                </div>
        );


}

export default Weather