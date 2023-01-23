import {useEffect, useState } from "react"
import * as S from './assets/style'
import {Movie} from './types/Movie'


function App() {
  
  const [movies, setMovies] = useState<Movie[]>([]);

  const loadMovies = async() => {
    let response = await fetch("https://api.b7web.com.br/cinema/")
    let json = await response.json();

    setMovies(json)

    /* fetch("https://api.b7web.com.br/cinema/")
    .then((response)=>{
      return response.json();
        })
    .then((json)=>{
      setMovies(json);
    }); */
  }

  return (
    <>
      <h1>Filmes cartaz</h1>
      <div>
        <S.Btn onClick={loadMovies}>Carregar os filmes</S.Btn>
        <h3>
          Total de Filmes: {movies.length} 
        </h3>
        <div>
          {movies.map((item, index) => (
            <S.Filme>
              <h2>{item.titulo}</h2>
              <S.image src={item.avatar} alt="" />
            </S.Filme>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
