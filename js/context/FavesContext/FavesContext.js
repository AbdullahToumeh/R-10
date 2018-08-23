import React, { Component, createContext} from 'react'
import { addFave, getFave, removeFave } from '../../config/models'

const FavesContext = createContext()

class FavesProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            favesIds: []
        }
    }

    componentDidMount() {
        this.getFavedSessionsIds()
    }

    getFavedSessionsIds = () => {
        try {
            this.setState({ favesIds: getFave() })
        } catch (error) {
            console.log(error)
        }
    }

    addFaveSession = (sessionId) => {
        try {
            addFave(sessionId)
            this.getFavedSessionsIds()
        } catch (error) {
            console.log(error)
        }
    }

    removeFaveSession = (sessionId) => {
        try {
            removeFave(sessionId)
            this.getFavedSessionIds()
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return (
            <FavesContext.Provider 
                value={{ 
                ...this.state, 
                getFave: this.getFavedSessionsIds,
                addFave: this.addFaveSession,
                removeFave: this.removeFaveSession
                }}
            >
                {this.props.children}
            </FavesContext.Provider>
        )
    }
}


export { FavesProvider };
export default FavesContext;

