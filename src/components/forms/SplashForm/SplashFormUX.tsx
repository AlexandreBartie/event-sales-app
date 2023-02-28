import React from 'react'
import ReactLoading from 'react-loading'

import './SplashForm.css'

export default function SplashForm  ( ) : JSX.Element
{
    return ( 
    <div className='SplashForm-Title'>
        <h3>Event Sales Application</h3>
        <h5>... Loading ...</h5>
        <h5><ReactLoading type={'bars'} color={'black'} height={'20%'} width={'20%'} /></h5>
    </div>)
}
