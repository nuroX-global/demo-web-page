import React from 'react'
import environment from '../../components/brandvalues';
import culture from '../../components/brandvalues';
import innovation from '../../components/brandvalues';
import quality from '../../components/brandvalues';

export default function brandvalues() {
  return (
    <article>
        <h2>Brand Values</h2>
        <environment />
        <culture />
        <innovation />
        <quality />
    </article>
  )
}
