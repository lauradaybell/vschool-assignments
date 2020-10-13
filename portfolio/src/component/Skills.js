import React from 'react'

const Skills = () => {
    return (
        <div className='skills'>
            <div style={{border:'1px solid block'}}>
                <section><h3>Frontend Skills</h3></section>
                <h4>JavaScript/ES6</h4>  
                <h4> React</h4>
                <h4>HTML</h4>
                <h4>CSS</h4>
                <h4>SCSS</h4>
                <h4>Cypress</h4>
            </div>
            <div style={{border:'1px solid block'}}>
                <section><h3>Backend Skills</h3></section>
                <h4>Node.js</h4>
                <h4>Express</h4>
                <h4>Mongoose</h4> 
                <h4>MongoDB</h4> 
            </div>
            <div style={{border:'1px solid block'}}>
                <section><h3>Other Skills</h3></section>
                <h4>Git</h4> 
                <h4>JSON</h4>
            </div>
        </div>
    )
}

export default Skills