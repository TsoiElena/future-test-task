import React from 'react'
import loading from '../../../assets/images/loadingGif.gif'

const Preloader = () => {

    return (
        <img src={loading} className={{backgroundColor: null}} alt=''/>
    )
}

export default Preloader
