import React from 'react'
import clue from '../images/clue.png'
import dinner from '../images/dinner.png'
import bounty from '../images/bounty.png'
import guess from '../images/guess.png'

const IndProject = (props) => {
    const { title, desc, link, langUsed } = props
    let image
    if (title === "Clue") {
        image = clue
    } else if (title ==="What's For Dinner") {
        image = dinner
    } else if (title === "Bounty Hunter") {
        image = bounty
    } else {
        image = guess
    }
    
    return(
        <div className="project" style={{backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <div className="projTxt">
                <h3>{title}</h3>
                <p className="projDesc">{desc}</p>
                <p className="lang">{langUsed}</p>
                <a target="_blank" rel="noopener noreferrer" href={link}><button className="linkBtn" >Launch Page</button></a>
            </div>
        </div>
    )
}


export default IndProject
