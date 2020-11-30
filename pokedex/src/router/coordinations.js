import { useHistory } from "react-router-dom"

export const goToPokedex = (history) => {
    history.push("/Pokedex")
}

export const goBack = (history) => {
    history.push("/")
}

export const goToDetails = (history) =>{
    history.push("/Details")
}