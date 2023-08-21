import React from 'react'

const Contact = () => {
    return (
        <div id='contact_section' className="works_section">
            <p style={{ textAlign: "center", display: "block" }} className="about_me"><span>04.</span> What’s Next?</p>

            <p className="login_getintouch" style={{
                color: "white",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: "-24px"
            }}>
                Get In Touch
            </p>

            <p className="login_message">
                Hey I’m currently looking for any new opportunities,
                my inbox is always open. Whether you have a question or just
                want to say hi, I’ll definitely get back get back to you! 🙂
            </p>

            <a
                className="email-link" href="mailto:shueaus@gmail.com"
                rel="noopener noreferrer" target="_blank">
                Say Hello
            </a>
        </div>
    )
}

export default Contact
