import React from 'react'

const Card = ({img,name}) => {
  return (
    <div className='Card'>   
    <img src={img} alt="img" />
    <h3 style={{textAlign:"center", padding:"2rem"} }>{name}</h3>
    </div>
  )
}

export default Card