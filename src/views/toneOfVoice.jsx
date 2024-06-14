import React from 'react'
import confident from '../../components/toneOfVoice';
import inspirational from '../../components/toneOfVoice';
import approachable from '../../components/toneOfVoice';
import knowledgeable from '../../components/toneOfVoice';

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
