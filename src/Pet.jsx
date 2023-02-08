import React from 'react'

const Pet = (props) => {
  return (
    <>
    <h1>
        {props.name}
    </h1>
    <h2>{props.animal}</h2>
    <h3>
        {props.breed}
    </h3>

    </>
  )
}
export default Pet