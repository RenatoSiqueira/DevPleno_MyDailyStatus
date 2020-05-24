import React from 'react'
import '../styles/styles.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const App = ({ Component, pageProps }) => {
    return (
        <div>
            <Header logout={true} />
            <div className='mni-h-screen container mx-auto'>
                <Component {...pageProps} />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App