import React, { useEffect, useState, useRef } from "react";
import { Movie } from './types/Movie';
import * as S from './style';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.b7web.com.br/cinema/");
      const json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch (e) {
      setLoading(false);
      alert("Erro, tente mais tarde!");
      console.log(e);
    }
  }

  const carrossel = useRef<HTMLDivElement>(null);

  const handleLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    carrossel.current!.scrollLeft -= carrossel.current!.offsetWidth;
  }
  const handleRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    carrossel.current!.scrollLeft += carrossel.current!.offsetWidth;
  }

  return (
    <>
      <S.Wrapper>
        <h1>Filmes cartaz</h1>
        <S.Btn>
          <button className="button-54" role="button" onClick={loadMovies}>Carregar os filmes</button>
        </S.Btn>
        {loading &&
          <S.Carregando>Carregando...</S.Carregando>
        }
        <S.ContainerCarrossel ref={carrossel}>
          {movies.map((item, index) => (
            <S.Filme key={index}>
              <div>{item.titulo}</div>
              <S.image src={item.avatar} alt="" />
            </S.Filme>
          ))}
        </S.ContainerCarrossel>
        <S.Buttons>
          <div>
            <button onClick={handleLeft}>&lt;</button>
          </div>
          <div>
            <button onClick={handleRight}>&gt;</button>
          </div>
        </S.Buttons>
      </S.Wrapper>
    </>
  );
}

export default App;