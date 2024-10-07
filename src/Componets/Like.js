import React, { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Like() {
 const [ like,setlike] = useState(0)

  return (
    <div className='container col-md-4 mt-5' >
      <button className='btn btn-primary' onClick={() => setlike(like+1)}> Like <ThumbUpIcon/> </button>
      <div className='mt-3'>Count : {like}</div>
    </div>
  )
}

export default Like
