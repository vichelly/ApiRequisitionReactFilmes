import {useEffect, useState } from "react"
import * as S from './assets/style'

function App() {
  
  const [movies, setMovies] = useState([]);

  const loadMovies = () => {
    fetch("https://api.b7web.com.br/cinema/")
    .then((response)=>{
      return response.json();
        })
    .then((json)=>{
      setMovies(json);
    });
  }

  return (
    <>
      <div>
        <S.Btn onClick={loadMovies}>Carregar os filmes</S.Btn>
        <h3>
          Total de Filmes: {movies.length} 
        </h3>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
