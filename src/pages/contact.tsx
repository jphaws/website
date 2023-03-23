import * as React from 'react'
import Layout from '../components/layout'

const ContactPage = () => {
    return (
        <Layout pageTitle="Contact Me"> 
            <p>Feel free to send me an email at: <a href = "mailto: jphaws@calpoly.edu">jphaws@calpoly.edu</a></p>
            <p>Or connect with me on <a href="https://www.linkedin.com/in/jaxon-haws/">Linkedin</a></p>
            <p>Or check out my <a href="https://www.github.com/jphaws">Github</a></p>
            </Layout>
    )
}

export default ContactPage