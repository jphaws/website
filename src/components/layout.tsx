import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    heading, 
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

import { RxRocket } from 'react-icons/rx'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

interface LayoutProps {
    pageTitle?: string;
    children?: React.ReactNode
}

const Layout: React.FunctionComponent<LayoutProps> = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/blog" className={navLinkText}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <a href="https://www.linkedin.com/in/jaxon-haws/" className={navLinkText}>
                               <FiLinkedin color = "blue" /> 
                            </a>
                        </li>
                        <li className={navLinkItem}>
                            <a href="https://www.github.com/jphaws" className={navLinkText}>
                               <FiGithub color = "blue" /> 
                            </a>
                        </li>
                        <li>
                        <a href="mailto: jphaws@calpoly.edu"> <FiMail color="blue" /> </a>
                        </li>
                    </ul>
                </nav>
                <p><RxRocket color="blue" /> Jaxon Haws © 2023</p>
            </footer>
        </div>
    )
}

export default Layout