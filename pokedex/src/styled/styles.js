import styled from 'styled-components'

export const Header = styled.div`
display: flex;
background-color: blue;
color: white;
`

export const H1Home = styled.h1`
text-align: center;
margin-left: 35vw;
`

export const DivButton = styled.div`
margin: 30px;
padding: 0;
`

export const GridPokemon = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 2em;
`

export const PokemonBox = styled.div`
border: 1px solid black;
margin: 20px;
`

export const HeaderDetails = styled.div`
display: flex;
justify-content: space-between;
background-color: blue;
color: white;
`

export const DetailButtons = styled.button`
width: 80px;
height: 60px;
margin: 10px;
`

export const DetailsContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
`
export const DetailsPictures = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: 1px solid black;
background-color: pink;
`

export const StyledPic = styled.img`
margin-bottom: 20px;
`

export const DetailsPowers = styled.div`
display:flex;
width: 25vw;
height: 50vh;
/* flex-direction: column;
align-items: center; */
border: 1px solid black;
justify-content: center;
margin-left: 20vw;
margin-top: 5em;
background-color: yellow;
`
export const DetailsAttacks = styled.div`
display: flex;
margin-top: 5em;
justify-content: center;
border: 1px solid black;
background-color: red;
width: 25vw;
height: 50vh;
margin-left: 5vw;
`

