import React from 'react'
import environment from '../../components/brandvalues';
import culture from '../../components/brandvalues';
import innovation from '../../components/brandvalues';
import quality from '../../components/brandvalues';

export default function BrandValues() {
  return (
    <article>
        <h2>Brand Values</h2>
        <Environment />
        <Culture />
        <Innovation />
        <Quality />
    </article>
  )
}
