import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
const Vehicle = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    return (

        <>
            <div className="container">
                <div className="card bg-dark ">

                
                    <div className="card-img-overlay ">
                        { /* imagen star wars*/}
                        <div className="row justify-content-center">
                            <img src={"imag/images1.png"} className="card-img col-4" alt="..." />
                        </div>
                        {/*navbar*/}
                        <div className="row col-12" id="nav">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark col-12">
                                <Link className="navbar-brand col-2 btn btn-outline-success font-weight-bold" to="/">Principal</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/people">People</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/planet">Planet</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/vehicle">vehicle</Link>
                                
                            </nav>
                        </div>

                        <div className="row">
                            <div className="col text-center text-white mt-4">
                                <h1>Vehicle</h1>
                                
                            </div>
                        </div>




                        <div className="row">
                            {
                                !!store.vehicles ?
                                    store.vehicles.results.map((vehicle, i) => {
                                        const img = vehicle.name.replace("/","-").split(" ").join("-").toLowerCase()+".jpg";
                                        return (
                                            <div className=" col-md-4 mt-5" key={i}>
                                                <div className="card text-dark">
                                                    <img src={"imag/"+img} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{vehicle.name}</h5>
                                                        <p className="card-text">Modelo: {vehicle.model}</p>
                                                        <Link to={"/vehicle/" + vehicle.name.replace("/","-").split(" ").join("-").toLowerCase()} className="btn btn-primary">description</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
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
export default Vehicle;