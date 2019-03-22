import React from 'react'

const Contact = (props) => (
    <section id="contact">
    <div className='contact-custom'>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <span>mikealfandre@gmail.com</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                    <span className="icon alt fa-linkedin"></span>
                        <h3>Linkedin</h3>
                    <a href="https://www.linkedin.com/in/mike-alf/" target='blank'>linkedin.com/mike-alf</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-github"></span>
                        <h3>GitHub</h3>
                        <a href="https://github.com/mikealfandre" target='blank'>github.com/mikealfandre</a>
                    </div>
                </section>

    </div>
    </section>
)

export default Contact
