import React from 'react'
import Confident from '../components/toneOfVoice/Confident';
import Inspirational from '../components/toneOfVoice/Inspirational';
import Approachable from '../components/toneOfVoice/Approachable';
import Knowledgeable from '../components/toneOfVoice/Knowledgeable';

export default function ToneOfVoice() {
  return (
    <article>
        <h2>Tone Of Voice</h2>
        <Confident />
        <Inspirational />
        <Approachable />
        <Knowledgeable />
    </article>
  )
}
