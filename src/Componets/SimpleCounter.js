import React, { useEffect, useState } from 'react'

function SimpleCounter() {
    const [number, setnumber] = useState(0)

    return (
        <div className='container col-md-4 p-5'>
         <h2 className='d-flex justify-content-center mt-5 mb-5' >Simple Counter</h2>
            <h2>Number: {number} </h2>
            <button className='btn btn-success mx-4' onClick={() => setnumber(number + 1)} >+</button>
            <button className='btn btn-danger' onClick={() => setnumber(number - 1)}>-</button>

        </div>
    )
}

export default SimpleCounter
