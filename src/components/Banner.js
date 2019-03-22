import React from 'react'
import profilepic from '../assets/images/profilepic.jpg'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                
                <h1>Hi, my name is Mike.</h1>
                <div className='profile-pic'><img src={profilepic} alt='profile' />  </div>
                
                
                
            </header>
            <div className="content">
                <h4>About Me:</h4><br/>
                <p>I am a full-stack web developer that enjoys building apps and solving problems.
                   <br/>
                   <br/>
                   Originally from the Washington D.C. area, I came out to Utah in 2012 and earned a bachelor's degree in Graphic Design from Brigham Young University. Soon after, however, I transitioned into digital marketing as a professional career. I am an entrepreneur at heart, so naturally I created a small e-commerce brands and sell products on Amazon and Shopify. With some success, I wanted to aim higher and and gain the skills to take me further. 
                   The obvious choice was to learn web development. I love it and am so excited to see how far I can take it.  </p>
                   <br/>
                   <p>Things I like to do:</p>
                   <li>Travel with my wife</li>
                   <li>Play soccer, golf, ski, spikeball</li>
                   <li>Watch the Terps win</li>
                   <li>Code</li>
    
    
            <br/>
                <ul className="actions">
                    <li><a href="#two" className="button next scrolly">SEE PROJECTS</a></li>
                </ul><br/>
                
            <h2>SKILLS</h2>
            </div>
        </div>
    </section>
)

export default Banner
