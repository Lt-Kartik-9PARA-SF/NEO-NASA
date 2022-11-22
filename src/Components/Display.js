import React, { useEffect, useState } from 'react'
import DataCard from './DataCard';

export default function Display() {

    const [data, setData] = useState([]);
    const [date, setDate] = useState(``);
    const [apiDate, setApiDate] = useState(``);
    let getDate = (event) => {
        console.log(date);
        setDate(event.target.value);

    }
    let dateSet = () => {
        if (date.length === 0) {
            alert("enter date first");
            return;
        }
        setApiDate(date);
        console.log(apiDate);

    }
    const fetchData = async () => {

        if (apiDate.length !== 0) {
            let key = "6k7BTdzhwr94WNvCnX0fI0cLRfeCIj8V1zDala30";
            let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${apiDate}&end_date=${apiDate}&api_key=${key}`;

            let response = await fetch(url);
            let info = await response.json();
            let data1 = info.near_earth_objects[date];


            setData(data1);
            if (data !== undefined) {

                let str = data.map((ele)=>{
                    return ele;
                })
                console.log(str);
            }

        }

        else {
            console.log("error");
        }

    }
   useEffect(()=>{fetchData()},[apiDate])


   
    return (
        <div>
             <div className='dateSelection'>
            <h3>Enter Date</h3>
            <p>Supported Date Format YYYY-MM-DD </p>
            <p>e.g (2022-11-12)</p>
            <input type="text" onChange={getDate} value={date} placeholder="Enter numaric values only" />
            <br/>
            <button type="button" onClick={dateSet}>Submit</button>
            <br/>
            <p className='result'><b>{data.length}</b> Near Earth Objects  found on {apiDate}</p>
             </div>
           
             <div className='showData'>
      {
        data.map((ele)=>{
            return(
                <DataCard name={ele.name} id={ele.id} neoId={ele.neo_reference_id} url={ele.nasa_jpl_url} hazard={ele.is_potentially_hazardous_asteroid} diameter={ele.estimated_diameter.kilometers.estimated_diameter_min} closeApproachDate={ele.close_approach_data[0].close_approach_date} miss_distance={ele.close_approach_data[0].miss_distance.kilometers} orbitingBody={ele.close_approach_data[0].orbiting_body}/>
            );
        })
     }

    </div>

           

        </div>
    );
}
