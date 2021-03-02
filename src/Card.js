import React from 'react'
import image from "./2.png"
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Card() {
    return (
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={image}  style={{width:'150px', height:'auto', paddingTop:'10px', marginLeft:'50px' }} alt=""/>
                        <hr/>
                         <h3 className="p-2">Top Gym Store</h3>
                        <p className="title"> <LocationOnIcon /> Karachi</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={image}  style={{width:'150px', height:'auto', paddingTop:'10px', marginLeft:'50px' }} alt=""/>
                        <hr/>
                        <h3 className="p-2">Top Gym Store</h3>
                        <p className="title"> <LocationOnIcon /> Karachi</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={image}  style={{width:'150px', height:'auto', paddingTop:'10px',  marginLeft:'50px' }} alt=""/>
                        <hr/>
                        <h3 className="p-2">Top Gym Store</h3>
                        <p className="title"> <LocationOnIcon /> Karachi</p>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={image}  style={{width:'150px', height:'auto', paddingTop:'10px',  marginLeft:'50px' }} alt=""/>
                        <hr/>
                        <h3 className="p-2">Top Gym Store</h3>
                        <p className="title"><LocationOnIcon /> Karachi</p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Card
