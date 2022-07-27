import React from 'react'

export const Types = ({types}) => {
  return (
    <>
      <p className={`type type1 shadow color_${types[0].type.name}`}>{types[0].type.name}</p>
      {types?.length >=2 &&
        <p className={`type type2 shadow color_${types[1].type.name}`}>{types[1].type.name}</p>
      }      
    </>
  )
}

