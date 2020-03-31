import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
const PeopleDescription = props => {
    const { store, actions } = useContext(Context);
    const { name } = store;
    const descript = props.match.params.descript
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
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/people">People</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/planet">Planet</Link>
                                <Link className="navbar-brand col-3 btn btn-outline-success font-weight-bold" to="/vehicle">vehicle</Link>
                                
                            </nav>
                        </div>

                        <div className="row">
                            <div className="col text-center text-white mt-4">
                                <h1>{descript}</h1>
                                
                            </div>
                        </div>




                        <div className="row justify-content-center">
                            {
                                !!store.peoples ?
                                    store.peoples.results.map((people, i) => {
                                        if (JSON.stringify(people.name) === JSON.stringify(descript)) {
                                            const img = people.name.split(" ").join("-").toLowerCase() + ".jpg";
                                            return (
                                                <div className=" col-md-8 mt-5 " key={i}>
                                                    <div className="card text-dark bg-dark">
                                                        <img src={"http://localhost:3000/imag/" + img} className="card-img-top" alt="..." />
                                                        <div className="card-body ">
                                                            <h1 className="card-title text-white font-weight-bold">{people.name}</h1>
                                                            <h4 className="card-text text-white font-italic">Birth Year: {people.birth_year}</h4>
                                                            <h4 className="card-text text-white font-italic">Created: {people.created}</h4>
                                                            <h4 className="card-text text-white font-italic">Edited: {people.edited}</h4>
                                                            <h4 className="card-text text-white font-italic">Eye_color: {people.eye_color}</h4>
                                                            <h4 className="card-text text-white font-italic">Gender: {people.gender}</h4>
                                                            <h4 className="card-text text-white font-italic">Hair_color: {people.hair_color}</h4>
                                                            <h4 className="card-text text-white font-italic">Height: {people.height}</h4>
                                                            <h4 className="card-text text-white font-italic">Mass: {people.mass}</h4>
                                                            <h4 className="card-text text-white font-italic">Skin_color: {people.skin_color}</h4>
                                                            {/* <p className="card-text font-italic">{people.opening_crawl}</p>*/}
                                                            <Link to={"/people"} className="btn btn-primary float-right col-3 ">Return</Link>
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
export default PeopleDescription;


