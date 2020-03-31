import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
const Principal = props => {
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
                                <h1>Principal</h1>
                                
                            </div>
                        </div>




                        
                            <img src={"imag/star-wars.jpg"} className="card-img col-12 mt-5" alt="..." />
                        
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
export default Principal;
