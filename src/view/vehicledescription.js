import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
const VehicleDescription = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    const info = props.match.params.info
    return (

        <>
            <div className="container">
                <div className="card bg-dark ">


                    <div className="card-img-overlay ">
                        { /* imagen star wars*/}
                        <div className="row justify-content-center">
                            <img src={"http://localhost:3000/imag/images1.png"} className="card-img col-4" alt="..." />
                        </div>
                        {/*navbar*/}
                        <div className="row col-12" id="nav">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-12">
                                <Link className="navbar-brand col-2 btn btn-outline-success font-weight-bold" to="/">Principal</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/vehicle">vehicle</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/planet">Planet</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/vehicle">vehicle</Link>
                                
                            </nav>
                        </div>

                        <div className="row">
                            <div className="col text-center text-white mt-4">
                                <h1>{info}</h1>
                                
                            </div>
                        </div>




                        <div className="row justify-content-center">
                            {
                                !!store.vehicles ?
                                    store.vehicles.results.map((vehicle, i) => {
                                        if (JSON.stringify(vehicle.name.replace("/","-").split(" ").join("-").toLowerCase()) === JSON.stringify(info)) {
                                            const img = vehicle.name.replace("/","-").split(" ").join("-").toLowerCase()+".jpg";
                                              console.log(img);
                                            return (
                                                <div className=" col-md-8 mt-5 " key={i}>
                                                    <div className="card text-dark bg-dark">
                                                        <img src={"http://localhost:3000/imag/" + img} className="card-img-top" alt="..." />
                                                        <div className="card-body ">
                                                            <h1 className="card-title text-white font-weight-bold">{vehicle.name}</h1>
                                                            <h4 className="card-text text-white font-italic">Model: {vehicle.model}</h4>
                                                            <h4 className="card-text text-white font-italic">Passengers: {vehicle.passengers}</h4>
                                                            <h4 className="card-text text-white font-italic">Cargo Capacity: {vehicle.cargo_capacity}</h4>
                                                            <h4 className="card-text text-white font-italic">Consumables: {vehicle.consumables}</h4>
                                                            <h4 className="card-text text-white font-italic">Cost in Credits: {vehicle.cost_in_credits}</h4>
                                                            <h4 className="card-text text-white font-italic">Created: {vehicle.created}</h4>
                                                            <h4 className="card-text text-white font-italic">Crew: {vehicle.crew}</h4>
                                                            <h4 className="card-text text-white font-italic">Edited: {vehicle.edited}</h4>
                                                            <h4 className="card-text text-white font-italic">Length: {vehicle.length}</h4>
                                                            <h4 className="card-text text-white font-italic">Manufacturer: {vehicle.manufacturer}</h4>
                                                            <h4 className="card-text text-white font-italic">Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</h4>
                                                            {/* <p className="card-text font-italic">{vehicle.opening_crawl}</p>*/}
                                                            <Link to={"/vehicle"} className="btn btn-primary float-right col-3 ">Return</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            })
                                    : (
                                        <div className="col-md-12 text-center">
                                            <div className="spinner-grow" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )
                                    
                            }
                        </div>
                    </div>
                </div>
            </div>


            {/*}   <div className="container">
                    <img src="././public/imagenes/cielo-estrellado.jpg" className="img-fluid" alt="Responsive image" />
                    <div className="row">
                        <div className="col">
                            <h1>Principal</h1>
                            <h2>Hola {name}</h2>
                            <input type="text" name="name" onChange={actions.setName} />
                        </div>
                    </div>
    </div>*/}
        </>
    )
}
export default VehicleDescription;