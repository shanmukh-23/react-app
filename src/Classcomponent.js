

import React, {Component} from 'react';

class Classcomponent extends Component {
    render() {
        return(
            <h1>This is a class component</h1>
        )
    }
}


export function Some() {
    return(
        <h1>this is a function component inherited from class component</h1>
    )
}

Classcomponent.Some = Some;

export default Classcomponent;