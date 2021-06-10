// outer
import React, {FunctionComponent} from 'react';
import {Route, Switch} from "react-router";


// local
import Header from "./header/Header";

import RootPathology3D from "./pathology3d/RootPathology3D";
import RootSurgery from "./surgery/RootSurgery";
import RootTeam from "./team/RootTeam";
import RootPartnership from "./partnership/RootPartnership";


interface OwnProps {
}

type Props = OwnProps;

const RootComponent: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <Header/>
            <React.Suspense fallback={() => <h2>Loading...</h2>}>


            </React.Suspense>

            <Switch>

                <Route exact path="/" render={() => <RootPathology3D/>}/>
                <Route path="/surgery" render={() => <RootSurgery/>}/>
                <Route path="/team" render={() => <RootTeam/>}/>
                <Route path="/partnership" render={() => <RootPartnership/>}/>

            </Switch>


        </div>

    );
};

export default RootComponent;
