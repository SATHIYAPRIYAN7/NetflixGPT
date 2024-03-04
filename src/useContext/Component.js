import React, { useState } from 'react'
import Component1 from './Component1'
import { UserContext } from './Context';

function Component() {

    const [user, setUser] = useState("Anil Patidar");

    return (
        <>
            <UserContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                {<input type="text" onChange={(e) => setUser(e.target.value)} />}
                <hr />
                <Component1 />
            </UserContext.Provider>


        </>
    )
}

export default Component;