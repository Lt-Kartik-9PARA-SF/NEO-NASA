import React from 'react'

export default function data() {
  return (
    <div className='showData'>
      {
        data.map((ele)=>{
            return(
                <DataCard name={ele.name} id={ele.id} neoId={ele.neo_reference_id} url={ele.nasa_jpl_url} hazard={ele.is_potentially_hazardous_asteroid} diameter={ele.estimated_diameter.kilometers.estimated_diameter_min} closeApproachDate={ele.close_approach_data[0].close_approach_date} miss_distance={ele.close_approach_data[0].miss_distance.kilometers} orbitingBody={ele.close_approach_data[0].orbiting_body}/>
            );
        })
     }

    </div>
    
  )
}
