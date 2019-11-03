import React from 'react'

const Footer = () => {
    const style = {
        border: '1px solid black',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'lightgray',
        height: '156'
    }

    return( 
        <div style = {style}> 
            <h5 className ='footer-main'>Contact Us</h5>
            <h6 className = 'footer-bottom'>phone: 123-445-6789</h6>
            <h6 className = 'footer-bottom'>Address: 123 RotoRooter Lane, Clean The Pipes, NJ 84004</h6>
           
        </div>
        )
}




export default Footer