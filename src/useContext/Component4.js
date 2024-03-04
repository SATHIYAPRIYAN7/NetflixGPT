import React, { useContext } from "react";
import {UserContext} from "./Context";


function Component4() {

    const user = useContext(UserContext);

    return (
        <>
            <h1>Component4</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}

export default Component4