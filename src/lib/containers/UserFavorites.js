// FILE NOT EXPORTED - DEMO ONLY
import React from 'react'

/**
 * Class that demos obtatining a user's favorites list
 */
class UserFavorites extends React.Component {

    constructor () {
        super()
        this.state = {
            favorites: [],
            errorMessage: ''
        }
        this.getFavorites = this.getFavorites.bind(this)
    }

    getFavorites() {
        this.props.getUserFavoritesEndpoint(this.props.token)
        .then(
            data => {
                this.setState({
                        favorites: data.results,
                        errorMessage: ""
                    })
                }
        ).catch(
            err => {
                this.setState({
                    errorMessage: err.reason
                })
            }
        )
    }

    render () {
        let listFavorites = null
        if (this.props.token === '') {
            listFavorites = <p> <a href="#top"> Sign in </a> and click the button to get favorites. </p>
        } else {
            listFavorites = this.state.favorites.map((fav) =>
                <li key={fav.id}> {fav.name} </li>
            );
        }

        return (
            <div className="container SRC-syn-border SRC-syn-border-spacing">
                <h3> Demo of getting user favorites</h3>
                <button disabled={this.props.token === "" ? true: false} className={"btn mb-1 btn-primary"} onClick={this.getFavorites}> Get favorites </button>
                {listFavorites}
                {this.state.errorMessage}
            </div>
        )
    }
}

export default UserFavorites;