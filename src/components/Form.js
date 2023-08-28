import React from 'react'

//stateless component
const Form = (props) => {
        return(
                    <form onSubmit={props.showbtn} className="weather-form">
                        <p className="findout">Find out tempreature, wind, humidity and more ... </p>
                        
                       <p>
                        <label className="lbl">Country: </label>
                            <input type="text" name="fcountry" placeholder="Country" className="inputt"/>
                       </p>
                       <p>
                            <label className="lbl">City: </label>
                            <input type="text" name="fcity" placeholder="City" className="inputt"/>
                        </p>
                        <button className="btnfind">Find Weather</button>

                    </form>
        );
}

export default Form