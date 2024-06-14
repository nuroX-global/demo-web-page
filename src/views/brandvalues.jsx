import React from 'react'
import Environment from '../components/brandValues/Environment';
import Culture from '../components/brandValues/Culture';
import Innovation from '../components/brandValues/Innovation';
import Quality from '../components/brandValues/Quality';

export default function BrandValues() {
  return (
    <section>
        <h2>Brand Values</h2>
        <Environment />
        <Culture />
        <Innovation />
        <Quality />
    </section>
  )
}
