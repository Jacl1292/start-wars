import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
const PlanetDescription = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    const descrip = props.match.params.descrip
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
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/planet">planet</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/planet">Planet</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/vehicle">vehicle</Link>
                                
                            </nav>
                        </div>

                        <div className="row">
                            <div className="col text-center text-white mt-4">
                                <h1>{descrip}</h1>
                                
                            </div>
                        </div>




                        <div className="row justify-content-center">
                            {
                                !!store.planets ?
                                    store.planets.results.map((planet, i) => {
                                        if (JSON.stringify(planet.name) === JSON.stringify(descrip)) {
                                            const img = planet.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            return (
                                                <div className=" col-md-8 mt-5 " key={i}>
                                                    <div className="card text-dark bg-dark">
                                                        <img src={"http://localhost:3000/imag/" + img} className="card-img-top" alt="..." />
                                                        <div className="card-body ">
                                                            <h1 className="card-title text-white font-weight-bold">{planet.name}</h1>
                                                            <h4 className="card-text text-white font-italic">Climate: {planet.climate}</h4>
                                                            <h4 className="card-text text-white font-italic">Created: {planet.created}</h4>
                                                            <h4 className="card-text text-white font-italic">Diameter: {planet.diameter}</h4>
                                                            <h4 className="card-text text-white font-italic">Edited: {planet.edited}</h4>
                                                            <h4 className="card-text text-white font-italic">Gravity: {planet.gravity}</h4>
                                                            <h4 className="card-text text-white font-italic">Orbital Period: {planet.orbital_period}</h4>
                                                            <h4 className="card-text text-white font-italic">Population: {planet.population}</h4>
                                                            <h4 className="card-text text-white font-italic">Rotation Period: {planet.rotation_period}</h4>
                                                            <h4 className="card-text text-white font-italic">Surface Water: {planet.surface_water}</h4>
                                                            <h4 className="card-text text-white font-italic">Terrain: {planet.terrain}</h4>
                                                            {/* <p className="card-text font-italic">{planet.opening_crawl}</p>*/}
                                                            <Link to={"/planet"} className="btn btn-primary float-right col-3 ">Return</Link>
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
export default PlanetDescription;


