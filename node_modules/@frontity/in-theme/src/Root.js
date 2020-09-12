import React, {useEffect} from "react"
import {connect} from "frontity"
import Home from "./pages/Home"

const Root = ({state, actions}) => {
    const data = state.source.get(state.router.link)
    
    useEffect(() => {
        actions.source.fetch("/videos")
    })

    return (
        <>
              
        {
            // show Home component  
            data.isHome && <Home/>
        }
        
        </>


    );
};

export default connect(Root);