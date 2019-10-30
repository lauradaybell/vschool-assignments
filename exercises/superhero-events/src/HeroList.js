import React from 'react'
import HeroData from './data.json'

import SuperHero from './SuperHero'

const HeroList = () => {
    const mappedHero = HeroData.map((hero, i) => <SuperHero key = {i + hero.name}
                                                 name = {hero.name}
                                                 show = {hero.show}
                                                 catchPhrase = {hero.catchPhrase}
                                                 imageName = {hero.imageName} />)

    

    return (
        <div>
            {mappedHero}
        </div>
    )
    }



export default HeroList