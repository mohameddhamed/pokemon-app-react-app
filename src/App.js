import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Pokemon from './pokemon';
import Navigation from './navigation';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const BASE_URL= 'https://pokeapi.co/api/v2/pokemon'

  const [pokemon, setPokemon]=useState([])
  const [currPage,setCurrPage]=useState(BASE_URL)
  const [nextPage,setNextPage]=useState()
  const [prevPage,setPrevPage]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    
    axios.get(currPage,{
      cancelToken: new axios.CancelToken(c=>cancel=c)
    })
    .then(res=>{
      setLoading(false)
      setPokemon(res.data.results.map(e=>{
        return e.name
      }))
      setNextPage(res.data.next)
      setPrevPage(res.data.previous)
    })
    
    return ()=>cancel();
        
  }, [currPage])


  function handleNextPage(){
    setCurrPage(nextPage)
  }
  function handlePrevPage(){
    setCurrPage(prevPage)
  }
  
  while(loading) return (<h1>'loading...'</h1>)

return (
  <>
      <Pokemon key={uuidv4()} pokemon={pokemon}/>
      <Navigation 
      goToNextPage={handleNextPage} goToPrevPage={handlePrevPage}
      prevPage={prevPage} nextPage={nextPage}/>
    </>
  );
}

export default App;
