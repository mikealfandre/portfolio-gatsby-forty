import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ModalImage from 'react-modal-image'

import screenshot1 from '../assets/images/screenshot1.png'
import givewyselogo from '../assets/images/givewyselogo.png'
import reactlogo from '../assets/images/reactlogo.png'
import reduxlogo from '../assets/images/reduxlogo.png'
import nodelogo from '../assets/images/nodelogo.png'
import login from '../assets/images/login.png'
import mylist from '../assets/images/mylist.png'
import donations from '../assets/images/donations.png'
import sass from '../assets/images/sass.png'
import matui from '../assets/images/matui.png'
import javascript from '../assets/images/javascript.png'
import css3 from '../assets/images/css3.png'
import html5 from '../assets/images/html5.png'
import postgresql from '../assets/images/postgresql.png'
import express from '../assets/images/express.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <div>
            <Layout>
                <Helmet
                    title="Mike Alfandre - Web Developer"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />
                    <article >
                        <header>
                            <h2></h2>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </header>
                        

                    </article>

                <div id="main">
                    <section id="one" className="tiles">
                            
                        
                        <article className="tile-one">
                            <header>
                                <h3>JavaScript</h3>
                            </header>
                            <div className='content'>
                                    <div className='react'>
                                        <img src={reactlogo} alt='' />
                                        <p>React</p>
                                    </div>
                                    <div className='redux'>
                                        <img src={reduxlogo} alt='' />
                                        <p>Redux</p>
                                    </div>
                            </div>
                            <div className='content'>
                                    <div className='node'>
                                        <img src={javascript} alt='' />
                                        <p>Javascript</p>
                                    </div>
                                    <div className='node'>
                                        <img src='' alt='' />
                                        <p></p>
                                    </div>
                            </div>

                        </article>
                            
                            <article className="tile-two">
                                <header>
                                    <h3>CSS / HTML</h3>
                                </header>
                                    
                                <div className='content'>
                                    <div className='react'>
                                        <img src={sass} alt='' />
                                        <p>SASS</p>
                                    </div>
                                    <div className='redux'>
                                        <img src={matui} alt='' />
                                        <p>Material-UI</p>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div className='node'>
                                        <img src={css3} alt='' />
                                        <p>CSS3</p>
                                    </div>
                                    <div className='redux'>
                                        <img src={html5} alt='' />
                                        <p>HTML5</p>
                                    </div>
                                    
                                </div>
                                
                            </article>
                            
                            <article className="tile-three">
                                <header>
                                    <h3>Backend</h3>
                                </header>

                                <div className='content'>
                                    <div className='react'>
                                        <img src={nodelogo} alt='' />
                                        <p>node</p>
                                    </div>
                                    <div className='redux'>
                                        <img src={postgresql} alt='' />
                                        <p>PostgreSQL</p>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div className='node'>
                                        <img src={express} alt='' />
                                        <p>express</p>
                                    </div>
                                    <div className='node'>
                                        <img src='' alt='' />
                                        <p></p>
                                    </div>
                                </div>
                            </article>
                            
                        
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>PROJECTS</h2>
                            </header>
                            <br/>
                            <h2 id='q'>+GIVEWYSE.</h2>
                            <p>+GIVEWYSE. is an easy way to discover and donate to charities. Scroll through a list of top rated non-profits and seamlessly donate with the tap of a button. If you're not sure if you want to donate just yet, then add the charity to your list so you can come back and donate later. +GIVEWYSE. tracks your donations so at the end of the year you can get a tax-ready report of all the good you've done.   </p>
                                <p><strong>Technologies Used:</strong> 
                                <br/>
                                <br/>
                                React | Redux | JavaScript | Node.js | PostgreSQL | HTML | SASS | Material-UI | 3rd Party API's (Unsplash, CharityNavigator)</p>

                            <div className='screen-container'>
                                <div className='screen-shot'>
                                    
                                        <ModalImage
                                            hideDownload={true}
                                            small={givewyselogo}
                                            large={givewyselogo}

                                            alt="+GIVEWYSE. logo"
                                        />
                            
                                </div>
                                <div className='screen-shot'>
                                    
                                        <ModalImage
                                            hideDownload={true}
                                            small={screenshot1}
                                            large={screenshot1}

                                            alt="Home page"
                                        />
                                </div>
                                <div className='screen-shot'>
                                    
                                        <ModalImage
                                            hideDownload={true}
                                            small={login}
                                            large={login}

                                            alt="Authentication modal"
                                        />
                                </div>
                                <div className='screen-shot'>
                                    
                                        <ModalImage
                                            hideDownload={true}
                                            small={mylist}
                                            large={mylist}

                                            alt="My list of saved charity cards"
                                        />
                                </div>
                                <div className='screen-shot'>
                                    
                                        <ModalImage
                                            hideDownload={true}
                                            small={donations}
                                            large={donations}

                                            alt="Donation history view"
                                        />
                                </div>
                            </div>
                               
                            <ul className="actions">
                                    <li><a href='http://www.givewyse.com' className="button next" target="_blank">visit site</a></li>
                                    <li><a href='https://github.com/mikealfandre/personal-project' className="button next" target="_blank">GitHub Repo</a></li>
                                
                            </ul>
                        </div>
                    </section>
                </div>
                

            </Layout>
             
                
            </div>
        )
    }
}

export default HomeIndex