import styled from 'styled-components'

export const Header = styled.div`
display: flex;
background-color: blue;
color: white;
`

export const H1Home = styled.h1`
text-align: center;
margin-left: 30vw;
`

export const DivButton = styled.div`
margin: 25px;
padding: 0;
`

export const GridPokemon = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-row-gap: 2em;
`

export const GridPokedex = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`

export const PokemonBox = styled.div`
background-color: antiquewhite;
border: 1px solid rgb(182, 180, 178);
border-radius: 10px;
text-align: center;
text-transform: uppercase; 
color: rgb(77, 75, 73);
padding: 5%;
margin: 30px 20px;
&:hover{
transform: scale(1.1);
background-color: rgb(247, 229, 210);
}
`

export const HeaderDetails = styled.div`
display: flex;
justify-content: space-between;
background-color: blue;
color: white;
`

export const DetailButtons = styled.button`
width: 140px;
height: 30px;
margin: 20px;
cursor: pointer;
border: 0;
border-radius: 5px;
color: white;
background-color: rgb(238, 136, 34);
`

export const DetailsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr 1fr 1fr;
border: 1px solid black;
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

export const ButtonPokedex = styled.button`
cursor: pointer;
border: 0;
border-radius: 5px;
margin: 5%;
padding: 5% 6%;
color: white;
background-color: rgb(238, 136, 34);
`

export const ToPokedex = styled.button`
width: 140px;
height: 30px;
margin: 5px;
cursor: pointer;
border: 0;
border-radius: 5px;
color: white;
background-color: rgb(238, 136, 34);
`

export const ButtonDetails = styled.button`
cursor: pointer;
border: 1px solid rgb(238, 136, 34);
border-radius: 5px;
padding: 4% 18%;
margin: 2%;
color: rgb(238, 136, 34);
background-color: antiquewhite;
`

export const ImageBox = styled.div`
background-color: antiquewhite;
border: 1px solid rgb(182, 180, 178);
border-radius: 10px;
float: right;
text-align: center;
color: rgb(77, 75, 73);
margin-top: 20px;
margin-right: 120px;
width: 32vw;
height: 93vh;
`

export const ImagePokemon = styled.img`
width: 250px;
margin: 15px;
`

export const PokemonInfoConteiner = styled.div`
display: block;
justify-content: center;
`

export const PokemonInfoBox = styled.div`
background-color: antiquewhite;
border: 1px solid rgb(182, 180, 178);
border-radius: 10px;
width: 45vw;
height: 45vh;
text-align: center;
color: rgb(77, 75, 73);
margin-top: 20px;
margin-left: 120px;
margin-bottom: 20px;
`

// export const PokemonType = styled.div`
// background-color: antiquewhite;
// border: 1px solid rgb(182, 180, 178);
// border-radius: 6px;
// width: 45vw;
// height: 10vh;
// text-align: center;
// color: rgb(77, 75, 73);
// margin: 35px 20px;
// `

// export const DetailsCenter = styled.div`
// border: 1px solid black;
// background-color: pink;
// display: flex;
// justify-content: center;
// `

// export const DetailsEnd = styled.div`
// border: 1px solid black;
// background-color: pink;
// display: flex;
// justify-content: flex-end;
// `

