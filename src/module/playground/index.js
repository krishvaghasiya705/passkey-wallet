import React from 'react'
import "./playground.scss";
import Playgroundherobanner from '../../components/playgroundpagecomponents/playgroundherobanner'
import CustomCursor from '../../components/cursor/CustomCursor';

export default function Playfround() {
    return (
        <div className='playground-page-alignment'>
            <CustomCursor />
            <Playgroundherobanner />
        </div>
    )
}
