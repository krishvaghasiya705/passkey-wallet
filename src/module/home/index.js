import React from 'react'
import Homepageherobanner from '../../components/Homepagecomponentes/homepageherobanner'
import Homesignout from '../../components/Homepagecomponentes/HomepageSignoutsection'
import Frictionlesssection from '../../components/Homepagecomponentes/Frictionlesssection'
import Unlocliquidity from '../../components/Homepagecomponentes/HomeunlockLiquidity'
import Homefocussection from '../../components/Homepagecomponentes/Homefocussection'
import Homeffortssection from '../../components/Homepagecomponentes/Homeeffortslesssection'

export default function Home() {
  return (
    <div>
      <Homepageherobanner />

      {/* Users section */}
      <div className="users-section">
        <Homesignout />
        <Frictionlesssection />
        <Unlocliquidity />
      </div>

      {/* Developers section */}
      <div className="devs-section">
        <Homefocussection />
        <Homeffortssection />
      </div>
    </div>
  )
}