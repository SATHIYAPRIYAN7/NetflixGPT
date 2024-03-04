import React ,{ memo } from 'react'

function Child({ no, setNo }) {
    console.log("Render child");
    return (
        <>
            <div>child</div>
            <input type='text' value={no} onChange={(e) => setNo(e.target.value)}></input>
            <div>
                {no}
            </div>
        </>
    )
}

export default memo(Child) 