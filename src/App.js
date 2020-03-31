import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './view/principal';
import injectContext from './store/appContext';
import People from './view/people';
import Planet from './view/planet';
import Vehicle from './view/vehicle';
import PeopleDescription from './view/peopledescription';
import VehicleDescription from './view/vehicledescription';
import PlanetDescription from './view/planetdescription';
const App = props => {

    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Principal} />
                <Route exact path="/people/:descript" component={PeopleDescription} />
                <Route exact path="/people" component={People} />
                <Route exact path="/planet/:descrip" component={PlanetDescription} />
                <Route exact path="/planet" component={Planet} />
                <Route exact path="/vehicle/:info" component={VehicleDescription} />
                <Route exact path="/vehicle" component={Vehicle} />
                <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}
export default injectContext(App);