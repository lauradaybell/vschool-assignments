import React from 'react'

const Skills = () => {
    return (
        <div className='skills'>
            <h2 className="skillTitle">Skills</h2>
            <div className="skillsDiv">
                <div style={{border:'1px solid block'}}>
                    <h3>Frontend:</h3> 
                    <h4>JavaScript/ES6</h4>  
                    <h4> React</h4>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                </div>
                <div style={{border:'1px solid block'}}>
                    <h3>Backend:</h3> 
                    <h4>Node.js</h4>
                    <h4>Express</h4>
                    <h4>Mongoose</h4> 
                    <h4>MongoDB</h4> 
                </div>
                <div style={{border:'1px solid block'}}>
                    <h3>Other Skills:</h3>
                    <h4>Git</h4> 
                    <h4>JSON</h4>
                </div>
            </div>
        </div>
    )
}

export default Skills