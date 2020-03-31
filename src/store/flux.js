import People from "../view/people";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            films: null,
            peoples: null,
            planets: null,
            vehicles: null
        },
        actions: {
            getFilms : url =>{
                fetch(url,{
                    method: 'GET',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    setStore({
                        films : data
                    });
                })
                .catch(error => {console.log(error)})
            },
            getPlanets : url =>{
                fetch(url,{
                    method: 'GET',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    setStore({
                        planets : data
                    });
                })
                .catch(error => {console.log(error)})
            },
            getVehicles : url =>{
                fetch(url,{
                    method: 'GET',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    setStore({
                        vehicles : data
                    });
                })
                .catch(error => {console.log(error)})
            },
            getPeoples : url =>{
                fetch(url,{
                    method: 'GET',
                    headers:{
                        'Content-type': 'application/json'
                    }
                })
                .then(resp => resp.json())
                .then(data =>{
                    setStore({
                        peoples : data
                    });
                })
                .catch(error => {console.log(error)})
            }
        }
    }
}
export default getState;