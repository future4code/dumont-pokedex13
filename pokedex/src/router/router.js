import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Details from "../components/details"
import Home from "../components/home"
import Pokedex from "../components/pokedex"

function Router () {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />

            </Route>

            <Route exact path="/pokedex">
                <Pokedex />
            </Route>

            <Route exact path="/pokemon-details/:name">
                <Details />
            </Route>

            <Route>
                <div>
                    Erro 404 - Página não Encontrada
                </div>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router