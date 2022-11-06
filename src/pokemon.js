import React from 'react'

export default function Pokemon(props) {
  const {pokemon}=props
  return (
    <>
        {pokemon.map(e=>{
            return (<div>{e}</div>)
        })}
    </>
  )
}
