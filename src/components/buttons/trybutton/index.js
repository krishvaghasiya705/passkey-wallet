import React from 'react'
import "./button.scss"
import { Link } from 'react-router-dom'

import Growicon from '../../../assets/svg/Growicon'

export default function Tybutton() {
    return (
        <div className='try-demo-button'>
            <Link to={"/"}>try our demo <Growicon /></Link>
        </div>
    )
}
