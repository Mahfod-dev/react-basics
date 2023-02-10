import React from 'react'
import {useParams} from 'react-router-dom'

const Details = () => {

const {detailid} = useParams()

  return (
    <>
    
    {detailid}
    
    
    </>
  )
}
export default Details