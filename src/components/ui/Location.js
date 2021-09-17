import React from 'react' 
import Map from './Map'


function Location() {  
  return (
    <div className="container-fluid">
        <div className="row">
            <h3 className="mx-auto my-5">Rider's location page below and some snappy text here</h3>
        </div>
        <div className="row">
            <Map />
        </div>
    </div>
)  
}  
export default Location