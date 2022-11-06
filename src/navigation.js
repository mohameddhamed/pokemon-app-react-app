import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function Navigation(props) {
  const {goToNextPage,goToPrevPage,prevPage,nextPage}=props;
  return (
    <>
      {prevPage&&<button key={uuidv4()} onClick={goToPrevPage}>prev</button>}
      {nextPage&&<button key={uuidv4()} onClick={goToNextPage}>next</button>}
    </>
  )
}
