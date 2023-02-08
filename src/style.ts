import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
`

export const Filme = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 280px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  div{
    height: 90px;
    display: flex;
    align-items: center;
    font-size: 22px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`
export const image = styled.img`
  object-fit: cover;
  @media (max-width: 768px) {
    width: 200px;
  }
`
export const ContainerCarrossel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  max-width: 75vw;
  ::-webkit-scrollbar{
    display: none;
  }
`

export const Buttons = styled.div`
  margin: 22px;
  display: flex;
  gap: 22px;
  button{
    width: 60px;
    height: 30px;
    cursor: pointer;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    font-size: 16px;
  }
`

export const Btn = styled.div`
.button-54 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-54:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  .button-54 {
    padding: 0.25em 0.75em;
  }
}
`
