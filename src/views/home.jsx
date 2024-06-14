import React from 'react'
import BrandValues from './BrandValues'
import ToneOfVoice from './ToneOfVoice'
import Intro from '../components/mainArticles/Intro'

export default function Home() {
  return (
    <div>
      <h1>Welcome To Nurox!</h1>
      <Intro/>
        <BrandValues />
        <ToneOfVoice />
    </div>
  )
}
