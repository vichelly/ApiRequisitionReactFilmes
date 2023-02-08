import {useEffect, useState, useRef } from "react"
import {Movie} from './types/Movie'
import * as S from './style'

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

  const carrossel = useRef(null)

  const handleLeft = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft -= carrossel.current.offsetWidth;
  }
  const handleRight = (e) => {
    e.preventDefault();
    carrossel.current.scrollLeft += carrossel.current.offsetWidth;
  }


  return (
    <>
      <S.Wrapper>
        <h1>Filmes cartaz</h1>
          <S.Btn>
            <button className="button-54" role="button" onClick={loadMovies}>Carregar os filmes</button>
          </S.Btn>
          <h3>
            Total de Filmes em cartaz: {movies.length} 
          </h3>
            <S.ContainerCarrossel ref={carrossel} >
              {movies.map((item, index) => (
                <S.Filme>
                  <div>{item.titulo}</div>
                  <S.image src={item.avatar} alt="" />
                </S.Filme>
              ))}
            </S.ContainerCarrossel>
            <S.Buttons>
                <div>
                  <button onClick={handleLeft} >&lt;</button>
                </div>
                <div>
                  <button onClick={handleRight} >&gt;</button>
                </div>
            </S.Buttons>
      </S.Wrapper>
      
    </>
  )
}

export default App
