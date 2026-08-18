import React from 'react'
import { useParams } from 'react-router-dom'

const ParaComp = () => {
    const {id} = useParams()
    return (
        <div>
            Param: {id}
        </div>
    )
}

export default ParaComp